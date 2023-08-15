import React from "react";

import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";
import PhotoList from "components/PhotoList";
import ModalPhoto from "components/ModalPhoto";

const PhotoDetailsModal = (props) => {
  const { photos } = props;
  const photoArray = [];

  for (const fav of props.favorites) {
    const photo = photos.find(photo=>(photo.id === fav));
    photoArray.push(photo);
  }

  return (
    <div className="photo-details-modal">
      <button
        className="photo-details-modal__close-button"
        onClick={() => props.closeButtonClicked()}
      >
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <hr className="modalBar"></hr>
      <span className="photo-details-modal__top-bar">Favorite Photos</span>
      <div className="photo-details-modal--images">
        <PhotoList
          photos={photoArray}
          isFavorite={props.isFavorite}
          toggleFavorite={props.toggleFavorite}
        />
      </div>
    </div>
  );
};

export default PhotoDetailsModal;
