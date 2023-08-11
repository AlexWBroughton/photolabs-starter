// import React, { useCallback, useState } from "react";
import React, { useState } from "react";
import FavIcon from "./FavIcon";
import "../styles/PhotoFavButton.scss";

const PhotoFavButton = function() {
  const [displayAlert, setDisplayAlert] = useState(true);
  const [selected, setSelected] = useState(false);

  const handleClick = () => {
    setSelected(!selected);
    setDisplayAlert(!displayAlert);
  };

  return (
    <div className="photo-list__fav-icon"onClick={handleClick}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon
          displayAlert={displayAlert}
          selected={selected}
        />
      </div>
    </div>
  );
};

export default PhotoFavButton;
