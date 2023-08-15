import React from "react";
import "./App.scss";
import HomeRoute from "routes/HomeRoute";
import PhotoDetailsModal from "routes/PhotoDetailsModal";
import FavoriteDetailsModal from "routes/FavoriteDetailsModal";
import useApplicationData from "./hooks/useApplicationData"; // Adjust the path as needed

const App = () => {
  const {
    photoId,
    favorites,
    photos,
    topics,
    favBool,
    favClicked,
    fetchPhotosByTopic,
    setFavBoolFalse,
    photoClicked,
    closeButtonClicked,
    toggleFavorite,
    isFavorite,
  } = useApplicationData();

  const toggleFavoritePhotos = function () {
    if (favorites.length !== 0 && favBool) {
      return (
        <FavoriteDetailsModal
          photos={photos}
          closeButtonClicked={closeButtonClicked}
          photoId={photoId}
          favClicked={favClicked}
          toggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
          favorites={favorites}
        />
      );
    }
    if (favorites.length === 0 && favBool) {
      {
        setFavBoolFalse();
      }
    }
  };

  const toggleModalPhoto = function () {
    if (photoId !== 0) {
      return (
        <PhotoDetailsModal
          photos={photos}
          closeButtonClicked={closeButtonClicked}
          photoId={photoId}
          toggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
          favorites={favorites}
        />
      );
    }
  };

  return (
    <div className="App">
      <HomeRoute
        favBool={favBool}
        topics={topics}
        photos={photos}
        favClicked={favClicked}
        fetchPhotosByTopic={fetchPhotosByTopic}
        photoClicked={photoClicked}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
        isFavorite={isFavorite}
      />
      {toggleModalPhoto()}
      {toggleFavoritePhotos()}
    </div>
  );
};

export default App;
