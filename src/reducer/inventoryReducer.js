import {
  FETCH_INVENTORY_REQUEST,
  FETCH_INVENTORY_SUCCESS,
  FETCH_INVENTORY_FAILURE,
} from "../actions/inventoryActions";

const initialState = {
  inventory: [],
  loading: false,
  error: null,
};

const inventoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INVENTORY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_INVENTORY_SUCCESS:
      return {
        ...state,
        inventory: action.payload,
        loading: false,
        error: null,
      };
    case FETCH_INVENTORY_FAILURE:
      return {
        ...state,
        inventory: [],
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default inventoryReducer;
