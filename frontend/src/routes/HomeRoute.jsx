import React, { useEffect, useState } from "react";
import TopNavigation from "components/TopNavigationBar";
import PhotoList from "components/PhotoList";
import "../styles/HomeRoute.scss";
import topics from "../mocks/topics";
import photos from "../mocks/photos";

const photosUrl = "http://localhost:8001/api/routes/photos";
const topicsUrl = "http://localhost:8001/api/routes/topics";


//const [favorites,setFavorites] = useState([]);

//const addFavorite = function(){

//};


const Photos = function (photos) {
  /*const [photos, setPhotos] = useState([]);

  useEffect(() => {
    fetch(photoUrl)
      .then(response => response.json())
      .then(data => setPhotos(data))
      .catch(error => console.error(error));
  }, []);*/

  //we have phostos now make elements out of them?
  console.log('here in Photos ' + photos);
  return <PhotoList photos={photos} />;
};

const Topics = function (topics) {
  /*const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch(topicsUrl)
      .then((response) => response.json())
      .then((data) => setTopics(data))
      .catch((error) => console.error(error));
  }, []);*/

  return <TopNavigation topics={topics} />;
};

const HomeRoute = () => {
  return (
    <div className="home-route">
      <div>{Topics(topics)}</div>
      <div><PhotoList photos={photos} /></div>
    </div>
  );
};

export default HomeRoute;
