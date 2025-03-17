import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
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
