import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";

const ModalPhoto = function (props) {
  const { id, location, urls, user, category } = props;

  return (
    <div >
      <div onClick={props.photoClicked} className =  "photo-details-modal__image">
        <PhotoFavButton
          selected={props.favorite}
          onClick={props.toggleFavorite}
        />
      </div>
      <img id={id} src={urls.full} className="photo-details-modal__image" />
      <div className="photo-details-modal__photographer-details">
        <img src={user.profile} className="photo-list__user-profile" />
        <div className="photo-list__user-info">
          <span> {user.name} </span>
          <span className="photo-list__user-location">
            {" "}
            {location.city}, {location.country}
          </span>
          <span> {category} </span>
        </div>
      </div>
    </div>
  );
};

export default ModalPhoto;
