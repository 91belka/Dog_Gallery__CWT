export const BREED_FETCH_START = 'BREED_FETCH_START';
export const BREED_FETCH_SUCCESS = 'BREED_FETCH_SUCCESS';
export const BREED_FETCH_ERROR = 'BREED_FETCH_ERROR';
export const ADD_LIKE = 'ADD_LIKE';

export const fetchBreeds = (
  state = {
    loading: true,
    hasError: false,
    errorMessage: '',
    data: [],
  },
  action
) => {
  switch (action.type) {
    case BREED_FETCH_START: {
      return {
        ...state,
        loading: true,
        hasError: false,
      };
    }
    case BREED_FETCH_SUCCESS: {
      return {
        ...state,
        loading: false,
        hasError: false,
        data: action.data,
      };
    }
    case BREED_FETCH_ERROR: {
      return {
        ...state,
        loading: false,
        hasError: true,
        errorMessage: action.data.message,
      };
    }
    case ADD_LIKE: {
      return {
        ...state,
        loading: false,
        hasError: false,
        data: state.data.map((breed, i) => {
          if (i === action.data.breedIndex) {
            const subBreedIndex = breed.subBreeds.findIndex((item) => item.breedName === action.data.breedName);
            if (subBreedIndex !== -1) {
              return {
                ...breed,
                likes: breed.likes + 1,
                subBreeds: breed.subBreeds.map((subBreed, subBreedI) => (subBreedI === subBreedIndex ? { ...subBreed, likes: subBreed.likes + 1 } : subBreed)),
              };
            }
          } else {
            return breed;
          }
        }),
      };
    }
    default:
      return state;
  }
};
