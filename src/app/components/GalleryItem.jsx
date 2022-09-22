import React from 'react';
import { connect } from 'react-redux';

import { addLike } from '../store/actions';
import ImageItem from './ImageItem';

const GalleryItem = ({ breedIndex, breedName, likes, mainBreedName, addLike }) => {
  const likeClick = () => {
    addLike(breedIndex, breedName);
  };

  console.log('rerender GalleryItem');

  return (
    <button className='gallery_item' aria-pressed='false' aria-label={`You likes the ${breedName} breeds!`} onClick={likeClick}>
      <ImageItem breedName={mainBreedName} className='gallery_item__image' />
      <div className='gallery_item__info'>
        <span>Likes: {likes}</span>
        <span>Breed: {mainBreedName}</span>
      </div>
    </button>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({ addLike: (index, name) => dispatch(addLike(index, name)) });

export default connect(mapStateToProps, mapDispatchToProps)(GalleryItem);
