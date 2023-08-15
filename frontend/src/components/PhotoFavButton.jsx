// import React, { useCallback, useState } from "react";
import React from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = function(props) {


  return (
    <div className="photo-list__fav-icon"onClick={props.onClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          selected={props.selected}
        />
      </div>
    </div>
  );
};

export default PhotoFavButton;
