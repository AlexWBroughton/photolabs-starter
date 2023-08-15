// hooks/useApplicationData.js

import { useReducer, useEffect } from "react";

export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  TOGGLE_FAV: "TOGGLE_FAV",
  FETCH_PHOTOS_BY_TOPIC: "FETCH_PHOTOS_BY_TOPIC",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  GET_PHOTOS_BY_TOPICS: "GET_PHOTOS_BY_TOPICS",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
};

const reducer = function (state, action) {
  switch (action.type) {
  case ACTIONS.SET_FAVBOOL:
    console.log(state.favBool);
    return {
      ...state,
      favBool: action.payload.favBool,
    };
  case ACTIONS.FAV_PHOTO_ADDED:
    return {
      ...state,
      favorites: [...state.favorites, action.payload.id],
    };
  case ACTIONS.FAV_PHOTO_REMOVED:
    return {
      ...state,
      favorites: state.favorites.filter((item) => item !== action.payload.id),
    };
  case ACTIONS.SET_PHOTO_DATA:
    return {
      ...state,
      photoData: action.payload.photoData,
    };
  case ACTIONS.SET_TOPIC_DATA:
    return {
      ...state,
      topicData: action.payload.topicData,
    };
  case ACTIONS.SELECT_PHOTO:
    return {
      ...state,
      photoId: action.payload.id,
    };
  case ACTIONS.DISPLAY_PHOTO_DETAILS:
    return {
      ...state,
      photoId: action.payload.id,
    };
  default:
    throw new Error(`Unsupported action type: ${action.type}`);
  }
};

export default function useApplicationData() {
  const [state, dispatch] = useReducer(reducer, {
    photoId: 0,
    favBool: false,
    favorites: [],
    photoData: [],
    topicData: [],
    // Initialize other state properties here
  });

  const favClicked = function (favorites, favBool) {
    if (favorites.length > 0) {
      dispatch({ type: ACTIONS.SET_FAVBOOL, payload: { favBool: true } });
      console.log("favBool" + favBool + "   favorites " + favorites);
    }
  };
  const photoClicked = function (id) {
    dispatch({ type: ACTIONS.SELECT_PHOTO, payload: { id } });
  };

  const closeButtonClicked = function () {
    dispatch({ type: ACTIONS.DISPLAY_PHOTO_DETAILS, payload: { id: 0 } });
    dispatch({ type: ACTIONS.SET_FAVBOOL, payload: { favBool: false } });
  };
  const setFavBoolFalse = function () {
    dispatch({ type: ACTIONS.SET_FAVBOOL, payload: { favBool: false } });
  };

  const toggleFavorite = function (photoId) {
    if (isFavorite(photoId)) {
      dispatch({ type: ACTIONS.FAV_PHOTO_REMOVED, payload: { id: photoId } });
      return;
    }
    dispatch({ type: ACTIONS.FAV_PHOTO_ADDED, payload: { id: photoId } });
  };

  const isFavorite = function (photoId) {
    return state.favorites.includes(photoId);
  };

  //fetch photo by topic api call
  const fetchPhotosByTopic = (topicId) => {
    fetch(`http://localhost:8001/api/topics/photos/${topicId}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: { photoData: data },
        });
      })
      .catch((error) => {
        console.log("There was an error fetching photos by topic");
        // Handle error if needed
      });
  };
  //photos api call
  useEffect(() => {
    fetch("http://localhost:8001/api/photos")
      .then((res) => res.json())
      .then((photoData) => {
        dispatch({
          type: ACTIONS.SET_PHOTO_DATA,
          payload: { photoData: photoData },
        });
      })
      .catch((error) => {
        console.log("there was an error fetching the photo data");
      });
  }, []);

  //topics api call
  useEffect(() => {
    fetch("http://localhost:8001/api/topics")
      .then((res) => res.json())
      .then((topicData) => {
        dispatch({
          type: ACTIONS.SET_TOPIC_DATA,
          payload: { topicData: topicData },
        });
      })
      .catch((error) => {
        console.log("there was an error fetching the topic data");
      });
  }, []);

  return {
    photoId: state.photoId,
    favorites: state.favorites,
    photos: state.photoData,
    topics: state.topicData,
    favBool: state.favBool,
    favClicked,
    fetchPhotosByTopic,
    photoClicked,
    closeButtonClicked,
    toggleFavorite,
    setFavBoolFalse,
    isFavorite,
    // Return other properties and actions
  };
}
