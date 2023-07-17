export const FETCH_PURCHASE_REQUEST = "FETCH_PURCHASE_REQUEST";
export const FETCH_PURCHASE_SUCCESS = "FETCH_PURCHASE_SUCCESS";
export const FETCH_PURCHASE_FAILURE = "FETCH_PURCHASE_FAILURE";

export const fetchPurchaseRequest = () => ({
  type: FETCH_PURCHASE_REQUEST,
});

export const fetchPurchaseSuccess = (purchases) => ({
  type: FETCH_PURCHASE_SUCCESS,
  payload: purchases,
});

export const fetchPurchaseFailure = (error) => ({
  type: FETCH_PURCHASE_FAILURE,
  payload: error,
});
