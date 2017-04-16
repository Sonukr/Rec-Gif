import React from 'react';

const GifItem = (image) => {
  return (
    <li>
      <img src={image.gif.url} alt={image.gif.name} />
    </li>
  )
};

export default GifItem;