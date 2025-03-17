import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import fetchImages from "./services/api";
import "./App.css";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const handleSetQuery = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
  };

  const openModal = (imageUrl, imageAlt) => {
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
