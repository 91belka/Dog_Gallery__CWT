import axios from 'axios';
import { BREED_FETCH_ERROR, BREED_FETCH_START, BREED_FETCH_SUCCESS, ADD_LIKE } from '../reducers/breed';

export function getBreeds() {
  return async (dispatch, getState) => {
    dispatch({ type: BREED_FETCH_START, data: {} });
    axios
      .get('https://dog.ceo/api/breeds/list/all')
      .then(({ data }) => {
        //filtering all brreds without subBreeds
        let breedsArray = Object.keys(data.message)
          .filter((item) => data.message[item].length > 0)
          .map((breed, index) => {
            //add subBreeds to the resulting array to get rid of random data
            return {
              count: data.message[breed].length,
              likes: 0,
              breedName: breed,
              subBreeds:
                data.message[breed].length > 0
                  ? data.message[breed].map((subBreed) => ({ likes: 0, breedName: `${breed}-${subBreed}`, mainBreedName: breed }))
                  : [{ likes: 0, breedName: breed, mainBreedName: index }],
            };
          });

        dispatch({ type: BREED_FETCH_SUCCESS, data: breedsArray });
      })
      .catch((error) => {
        console.error(error);
        dispatch({ type: BREED_FETCH_ERROR, data: error });
      });
  };
}

export function addLike(breedIndex, breedName) {
  return { type: ADD_LIKE, data: { breedIndex, breedName } };
}
