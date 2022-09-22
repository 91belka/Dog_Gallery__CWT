import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';

const ImageItem = ({ breedName, className }) => {
  const [imageUrl, setImageUrl] = useState(null);
  const [imageLoading, setImageLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://dog.ceo/api/breed/${breedName}/images/random`)
      .then(({ data }) => {
        setImageUrl(data.message);
      })
      .catch((err) => {
        console.log(`Image for ${breedName} was not loaded!`);
      });
  }, []);

  const imageLoaded = () => setImageLoading(false);

  return (
    <>
      <Spinner show={imageLoading} />
      <img src={imageUrl} alt={breedName} className={className} onLoad={imageLoaded} />
    </>
  );
};

export default ImageItem;
