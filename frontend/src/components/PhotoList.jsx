import React from "react";
import PhotoListItem from "./PhotoListItem";

import "../styles/PhotoList.scss";

const sampleDataForPhotoList = [
  {
    id: "1",
    location: {
      city: "Montreal",
      country: "Canada",
    },
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-1-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
    },
    category: "people",
    user: {
      id: "1",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "2",
    location: {
      city: "Toronto",
      country: "Canada",
    },
    category: "travel",
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-2-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-2-Regular.jpeg`,
    },
    user: {
      id: "2",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
  {
    id: "3",
    location: {
      city: "Ottawa",
      country: "Canada",
    },
    category: "animals",
    urls: {
      full: `${process.env.PUBLIC_URL}/Image-3-Full.jpeg`,
      regular: `${process.env.PUBLIC_URL}/Image-3-Regular.jpeg`,
    },
    user: {
      id: "3",
      username: "exampleuser",
      name: "Joe Example",
      profile: `${process.env.PUBLIC_URL}/profile-1.jpg`,
    },
  },
];

const makeListArray = function (props) {
  const listArray = props.map((item, index) => {
    const { id, location, urls, user } = item; // Destructuring

    return (
      <PhotoListItem
        key={index}
        id={id}
        location={location}
        urls={urls}
        user={user}
      />
    );
  });

  return <React.Fragment>{listArray}</React.Fragment>; // Wrap in React.Fragment
};

const PhotoList = (props) => {
  const { photos } = props;

  for (const prop in props) {
    console.log("here in the for loop " + prop);
  }

  //console.log("PhotoList props    " + photos);

  return <ul className="photo-list">{makeListArray(photos)}</ul>;
};

export default PhotoList;
