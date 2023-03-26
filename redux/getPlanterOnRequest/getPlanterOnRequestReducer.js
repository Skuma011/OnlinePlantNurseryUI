import getPlanterOnRequestConstant from "./getPlanterOnRequestConstants";

const initialState = {
  planter: undefined,
  error: "",
};

function getPlanterOnRequestReducer(state = initialState, action) {
  if (
    action.type === getPlanterOnRequestConstant.success ||
    action.type === getPlanterOnRequestConstant.fail
  ) {
    let newState = { ...state, ...action };
    return newState;
  }
  return state;
}
export default getPlanterOnRequestReducer;
