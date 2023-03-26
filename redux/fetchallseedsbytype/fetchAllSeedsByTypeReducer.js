import fetchAllSeedsByTypeConstants from "./fetchAllSeedsByTypeConstants";

const initialState = {
  progress: false,
  seeds: [],
  error: [],
};

export default function fetchAllSeedsByTypeReducer(
  state = initialState,
  action
) {
  if (
    action.type === fetchAllSeedsByTypeConstants.fetchAllSeedsByTypeFail ||
    action.type === fetchAllSeedsByTypeConstants.fetchAllSeedsByTypeRequest ||
    action.type === fetchAllSeedsByTypeConstants.fetchAllSeedsByTypeSuccess
  ) {
    let newState = { ...state, ...action };
    return newState;
  }

  return state;
}
