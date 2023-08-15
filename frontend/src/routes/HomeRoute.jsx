import React, { useEffect, useState } from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";


const HomeRoute = (props) => {

  return (
    <div className="home-route">
      <div><TopNavigation topics={props.topics} favorites = {props.favorites} fetchPhotosByTopic = {props.fetchPhotosByTopic}/> </div>
      <div>
        <PhotoList
          photos={props.photos}
          toggleFavorite = {props.toggleFavorite}
          isFavorite = {props.isFavorite}
          photoId = {props.photoId}
          photoClicked = {props.photoClicked}
        />
      </div>
    </div>
  );
};

export default HomeRoute;
