import fetchAllPlantersConstsants from "./fetchAllPlantersConstants";
const initialState = {
  progress: false,
  planters: [],
  error: [],
};

export default function fetchAllPlantersReducer(state = initialState, action) {
  if (
    action.type === fetchAllPlantersConstsants.fetchAllPlantersFail ||
    action.type === fetchAllPlantersConstsants.fetchAllPlantersSuccess ||
    action.type === fetchAllPlantersConstsants.fetchAllPlantersRequest
  ) {
    let newState = { ...state, ...action };
    return newState;
  }
  return state;
}
