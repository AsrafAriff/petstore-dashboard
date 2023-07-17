import {
  FETCH_PET_REQUEST,
  FETCH_PET_SUCCESS,
  FETCH_PET_FAILURE,
} from "../actions/petActions";

const initialState = {
  pets: [],
  loading: false,
  error: null,
};

const petReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PET_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PET_SUCCESS:
      return {
        ...state,
        pets: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_PET_FAILURE:
      return {
        ...state,
        pets: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default petReducer;
