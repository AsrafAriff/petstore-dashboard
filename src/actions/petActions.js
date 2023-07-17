export const FETCH_PET_REQUEST = "FETCH_PET_REQUEST";
export const FETCH_PET_SUCCESS = "FETCH_PET_SUCCESS";
export const FETCH_PET_FAILURE = "FETCH_PET_FAILURE";

export const fetchPetRequest = () => ({
  type: FETCH_PET_REQUEST,
});

export const fetchPetSuccess = (pets) => ({
  type: FETCH_PET_SUCCESS,
  payload: pets,
});

export const fetchPetFailure = (error) => ({
  type: FETCH_PET_FAILURE,
  payload: error,
});
