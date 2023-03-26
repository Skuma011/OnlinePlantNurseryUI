import fetchSeedByIdConstants from "./fetchSeedByIdConstants";

const initialState = {
  progress: false,
  seed: undefined,
  error: "",
};

function fetchSeedByIdReducer(state = initialState, action) {
  if (
    action.type === fetchSeedByIdConstants.fetchSeedByIdRequest ||
    action.type === fetchSeedByIdConstants.fetchSeedByIdSuccess ||
    action.type === fetchSeedByIdConstants.fetchSeedByIdFail
  ) {
    let newState = { ...state, ...action };
    return newState;
  }

  return state;
}

export default fetchSeedByIdReducer;
