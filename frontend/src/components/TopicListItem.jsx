import React from "react";

import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  const {id,slug,title,fetchPhotosByTopic} = props;

  const handleTopicClick = (topicId) => {
    fetchPhotosByTopic(topicId);
  };
  return (
    <div className="topic-list__item" onClick={() => handleTopicClick(id)}>
      <div className = 'topic-list__item span'>
        <span> {title} </span>
      </div>
    </div>
  );
};

export default TopicListItem;
