import { Image } from "../../types";
import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import React from "react";
import { FC } from "react";
interface ImageGalleryProps {
  images: Image[];
  openModal: (imageUrl: string, imageAlt: string) => void;
}
const ImageGallery: FC<ImageGalleryProps> = ({ images, openModal }) => {
  return (
    <ul className={s.galleryList}>
      {images.map((image) => {
        return (
          <li className={s.galleryItem} key={`${image.id}-${image.likes}`}>
            <ImageCard image={image} openModal={openModal} />
          </li>
        );
      })}
    </ul>
  );
};

export default ImageGallery;
