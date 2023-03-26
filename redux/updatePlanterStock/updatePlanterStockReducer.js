import updatePlanterStockConstants from "../updatePlanterStock/updatePlanterStockConstants";
const initialState = {
  planter: undefined,
  error: "",
};
export default function updatePlanterStockReducer(
  state = initialState,
  action
) {
  if (
    action.type === updatePlanterStockConstants.fail ||
    action.type === updatePlanterStockConstants.success
  ) {
    let newState = { ...state, ...action };
    return newState;
  }
  return state;
}
