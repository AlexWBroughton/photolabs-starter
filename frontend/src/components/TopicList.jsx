import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

const TopicList = (props) => {
  const { topics } = props;

  const topicArray = topics.map((item, index) => {
    const { id } = item;
    const { slug } = item;
    const { title } = item;
    return (
      <TopicListItem
        key={index}
        id={id}
        slug={slug}
        title={title}
        fetchPhotosByTopic={props.fetchPhotosByTopic}
      />
    );
  });

  return <div className="top-nav-bar__topic-list">{topicArray}</div>;
};

export default TopicList;
