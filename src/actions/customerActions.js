export const FETCH_CUSTOMER_REQUEST = "FETCH_CUSTOMER_REQUEST";
export const FETCH_CUSTOMER_SUCCESS = "FETCH_CUSTOMER_SUCCESS";
export const FETCH_CUSTOMER_FAILURE = "FETCH_CUSTOMER_FAILURE";

export const fetchCustomerRequest = () => ({
  type: FETCH_CUSTOMER_REQUEST,
});

export const fetchCustomerSuccess = (customers) => ({
  type: FETCH_CUSTOMER_SUCCESS,
  payload: customers,
});

export const fetchCustomerFailure = (error) => ({
  type: FETCH_CUSTOMER_FAILURE,
  payload: error,
});
