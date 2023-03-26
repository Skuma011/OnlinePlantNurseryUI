import addSeedConstants from "./addSeedConstants";

const intialState = {
  seed: undefined,
  error: "",
};

function addSeedReducer(state = intialState, action) {
  if (
    action.type === addSeedConstants.fail ||
    action.type === addSeedConstants.success
  ) {
    let newState = { ...state, ...action };
    return newState;
  }

  return state;
}

export default addSeedReducer;
