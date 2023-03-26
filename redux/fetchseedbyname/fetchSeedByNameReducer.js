import fetchSeedByNameConstants from "./fetchSeedByNameConstants";

const initialState = {
  progress: false,
  seed: undefined,
  error: "",
};

function fetchSeedByNameReducer(state = initialState, action) {
  if (
    action.type === fetchSeedByNameConstants.fetchSeedByNameRequest ||
    action.type === fetchSeedByNameConstants.fetchSeedByNameSuccess ||
    action.type === fetchSeedByNameConstants.fetchSeedByNameFail
  ) {
    let newState = { ...state, ...action };
    return newState;
  }

  return state;
}

export default fetchSeedByNameReducer;
