import fetchAllSeedsConstants from "./fetchAllSeedsConstants";

const initialState = {
  progress: false,
  seeds: [],
  error: [],
};

export default function fetchAllSeedsReducer(state = initialState, action) {
  if (
    action.type === fetchAllSeedsConstants.fetchAllSeedsFail ||
    action.type === fetchAllSeedsConstants.fetchAllSeedsRequest ||
    action.type === fetchAllSeedsConstants.fetchAllSeedsSuccess
  ) {
    let newState = { ...state, ...action };
    return newState;
  }

  return state;
}
