import fetchPlanterByCostConstants from "./fetchPlanterByCostConstants";

const initialState = {
  planters: undefined,
  error: "",
};

function fetchPlanterByCostReducer(state = initialState, action) {
  if (
    action.type === fetchPlanterByCostConstants.fetchByCostSuccess ||
    action.type === fetchPlanterByCostConstants.fetchByCostFail
  ) {
    let newstate = { ...state, ...action };
    return newstate;
  }
  return state;
}

export default fetchPlanterByCostReducer;
