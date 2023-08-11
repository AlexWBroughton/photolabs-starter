import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {id,slug,title} = props;

  return (
    <div className="topic-list__item">
      <div className = 'topic-list__item span'>
        <span> {title} </span>
      </div>
    </div>
  );
};

export default TopicListItem;
