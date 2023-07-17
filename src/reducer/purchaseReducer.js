import {
  FETCH_PURCHASE_REQUEST,
  FETCH_PURCHASE_SUCCESS,
  FETCH_PURCHASE_FAILURE,
} from "../actions/purchaseActions";

const initialState = {
  purchases: [],
  loading: false,
  error: null,
};

const purchaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PURCHASE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_PURCHASE_SUCCESS:
      return {
        ...state,
        purchases: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_PURCHASE_FAILURE:
      return {
        ...state,
        purchases: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default purchaseReducer;
