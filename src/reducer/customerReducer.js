import {
  FETCH_CUSTOMER_REQUEST,
  FETCH_CUSTOMER_SUCCESS,
  FETCH_CUSTOMER_FAILURE,
} from "../actions/customerActions";

const initialState = {
  customers: [],
  loading: false,
  error: null,
};

const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CUSTOMER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CUSTOMER_SUCCESS:
      return {
        ...state,
        customers: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_CUSTOMER_FAILURE:
      return {
        ...state,
        customers: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default customerReducer;
