import React from 'react';
import FavIcon from './FavIcon';

import '../styles/FavBadge.scss';

const FavBadge = ({ isFavPhotoExist }) => {
  return (
    <div >
      <FavIcon displayAlert={!!isFavPhotoExist} selected={!!isFavPhotoExist}/>
    </div>
  );
};

export default FavBadge;