import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";


const PhotoList = (props) => {

  const listArray = props.photos.map((photo) => {
    const { id, location, urls, user } = photo; // Destructuring
    const favorite = props.isFavorite(id);

    return (
      <PhotoListItem
        key={id}
        id={id}
        location={location}
        urls={urls}
        user={user}
        toggleFavorite={()=>props.toggleFavorite(id)}
        favorite={favorite}
        photoClicked = {()=>props.photoClicked(id)}
        modal = {false}
      />
    );
  });
  

  return <ul className="photo-list">{listArray}</ul>;
};

export default PhotoList;
