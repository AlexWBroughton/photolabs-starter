import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = (props) => {

  return (
    <div onClick = {()=>props.favClicked(props.favorites)}>
      <FavIcon displayAlert={!!props.isFavPhotoExist} selected={!!props.isFavPhotoExist}/>
    </div>
  );
};

export default FavBadge;