import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";



const makeTopicArray =  function(props) {

  const topicArray = props.map((item, index) => {

    const {id} = item;
    const { slug} = item;
    const { title } = item;
    return (
      <TopicListItem key = {index} id={id} slug={slug} title={title} />
    );
  });
  return topicArray;

};

const TopicList = (props) => {
  const {topics} = props;
  return (
    <div className="top-nav-bar__topic-list">
      {makeTopicArray(topics)}
    </div>
  );
};

export default TopicList;
