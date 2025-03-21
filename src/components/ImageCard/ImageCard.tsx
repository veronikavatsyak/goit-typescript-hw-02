import s from "./ImageCard.module.css";
import React, { FC } from "react";
import { Image } from "../../types";
interface ImageCardProps {
  image: Image;
  openModal: (imageUrl: string, imageAlt: string) => void;
}
const ImageCard: FC<ImageCardProps> = ({ image, openModal }) => {
  const { alt_description, urls, likes, user } = image;

  return (
    <div onClick={() => openModal(urls.regular, alt_description)}>
      <img className={s.galleryImg} src={urls.small} alt={alt_description} />
      <div className={s.thumb}>
        <ul className={s.profile}>
          <li>
            <p>{user.name}</p>
            <img
              className={s.user}
              src={user.profile_image.small}
              alt={user.name}
            />
          </li>
          <li>
            <p>Likes: {likes}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ImageCard;
