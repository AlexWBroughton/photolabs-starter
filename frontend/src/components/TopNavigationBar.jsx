import React, {useState} from 'react';
import TopicList from "./TopicList";
import '../styles/TopNavigationBar.scss';
import FavBadge from './FavBadge';
import '../styles/NavBadge.scss';


const TopNavigation = (props) => {

  const {topics} = props;
 
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <span className = '.top-nav-bar--topic-list'><FavBadge id = "NavBadge"/><TopicList topics = {topics}/></span>
    </div>
  );
};

export default TopNavigation;