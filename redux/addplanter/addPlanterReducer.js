import addPlanterConstants from "./addPlanterConstants";
const initialState = {
  planter: undefined,
  error: "",
};
function addPlanterReducer(state = initialState, action) {
  if (
    action.type === addPlanterConstants.fail ||
    action.type === addPlanterConstants.success
  ) {
    let newState = { ...state, ...action };
    return newState;
  }
  return state;
}
export default addPlanterReducer;
