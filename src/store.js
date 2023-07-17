import { createStore, applyMiddleware, combineReducers } from "redux";
import App from "./App";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import inventoryReducer from "./reducers/inventoryReducer";
import petReducer from "./reducers/petReducer";
import customerReducer from "./reducers/customerReducer";
import purchaseReducer from "./reducers/purchaseReducer";
// Import other reducers if needed

const rootReducer = combineReducers({
  inventory: inventoryReducer,
  pet: petReducer,
  customer: customerReducer,
  purchase: purchaseReducer,
  // Add other reducers here
});

const store = createStore(rootReducer, applyMiddleware(thunk));

const ReduxApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

export default ReduxApp;
