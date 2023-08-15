import React, { useState } from "react";
import TopicList from "./TopicList";
import "../styles/TopNavigationBar.scss";
import FavBadge from "./FavBadge";
import "../styles/NavBadge.scss";

const TopNavigation = (props) => {
  const { topics } = props;
  console.log('topnav' + props.favClicked);


  const badgeRender = function () {
    if (props.favorites.length === 0) {
      return <FavBadge id="NavBadge" favClicked = {props.favClicked} favBool = {props.favBool} favorites = {props.favorites}/>;
    }
    return <FavBadge id="NavBadge" isFavPhotoExist = "true" favBool = {props.favBool} favClicked = {props.favClicked} favorites ={props.favorites}/>;
  };

  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <div className="top-nav-bar__container">
        {badgeRender()}
        <TopicList topics={topics} fetchPhotosByTopic = {props.fetchPhotosByTopic} />
      </div>
    </div>
  );
};

export default TopNavigation;
