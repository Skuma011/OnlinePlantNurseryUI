import updateSeedsStockConstants from "./updateSeedsStockConstants";

const initialState = {
  seed: undefined,
  error: "",
};
function updateSeedsStockReducer(state = initialState, action) {
  if (
    action.type == updateSeedsStockConstants.success ||
    action.type == updateSeedsStockConstants.fail
  ) {
    let newState = { ...state, ...action };
    return newState;
  }
  return state;
}

export default updateSeedsStockReducer;
