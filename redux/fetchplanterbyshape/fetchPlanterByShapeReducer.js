import fetchPlanterByShapeConstants from "./fetchPlanterByShapeConstants";

const initialState = {
  planters: undefined,
  error: '',
};

function fetchPlanterByShapeReducer(state = initialState, action) {
  if (
    action.type === fetchPlanterByShapeConstants.fetchByShapeSuccess ||
    action.type === fetchPlanterByShapeConstants.fetchByShapeFail
  ) {
    let newState = { ...state, ...action };
    return newState;
  }
  return state;
}
export default fetchPlanterByShapeReducer;
