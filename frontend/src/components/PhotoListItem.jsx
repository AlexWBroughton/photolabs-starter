import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from './PhotoFavButton';


const PhotoListItem = (props) => {
  
  /* Insert React */

  const {id,location,urls,user,category} = props;

  return (
    <div className = 'photo-list__item'>
      <div>
        <PhotoFavButton/>
        <img id = {id} src= {urls.regular} className = 'photo-list__image'/>
      </div>
      <div className = 'photo-list__user-details'>
        <img src = {user.profile} className = 'photo-list__user-profile'/>
        <div className = 'photo-list__user-info'>
          <span> {user.name} </span>
          <span className = 'photo-list__user-location'> {location.city},      {location.country}</span>
          <span> {category} </span>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
