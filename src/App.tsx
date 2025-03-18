import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import fetchImages from "./services/api";
import "./App.css";
import { Image } from "./types";
import { ModalImage } from "./types";

const App = () => {
  const [query, setQuery] = useState<string>("");
  const [images, setImages] = useState<Image[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [modalImage, setModalImage] = useState<ModalImage | null>(null);

  const handleSetQuery = (newQuery: string) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const openModal = (imageUrl: string, imageAlt: string) => {
    setModalImage({ url: imageUrl, alt: imageAlt });
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalImage(null);
  };

  useEffect(() => {
    const getData = async () => {
      if (!query) return;

      try {
        setIsLoading(true);
        setIsError(false);

        const { results } = await fetchImages(query, page);
        setImages((prev) => [...prev, ...results]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [query, page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSetQuery} />
      <ImageGallery images={images} openModal={openModal} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      {images.length > 0 && !isLoading && !isError && (
        <LoadMoreBtn click={handleLoadMore} />
      )}
      {modalImage && (
        <ImageModal
          isOpen={modalIsOpen}
          closeModal={closeModal}
          imageUrl={modalImage.url}
          imageAlt={modalImage.alt}
        />
      )}
    </div>
  );
};

export default App;
