import React from 'react';
import { connect } from 'react-redux';
import ImageItem from './ImageItem';

const SidebarItem = ({ breedName, count, likes }) => {
  console.log('rerender SidebarItem');

  return (
    <div className='sidebar_item'>
      <ImageItem breedName={breedName} className='sidebar_item__image' />
      <div className='sidebar_item__info'>
        <span>Count: {count}</span>
        <span>Likes: {likes}</span>
        <span>Breed: {breedName}</span>
      </div>
    </div>
  );
};

export default connect()(SidebarItem);
