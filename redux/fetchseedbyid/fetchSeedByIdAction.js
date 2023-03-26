import { fetchSeedById } from "../../service/SeedService";
import store from "../store";
import fetchSeedByIdConstants from "./fetchSeedByIdConstants";

function fetchSeedByIdRequest() {
  return {
    progress: true,
    seed: undefined,
    error: "",
    type: fetchSeedByIdConstants.fetchSeedByIdRequest,
  };
}

function fetchSeedByIdSuccess(seed) {
  return {
    progress: false,
    seed: seed,
    error: "",
    type: fetchSeedByIdConstants.fetchSeedByIdSuccess,
  };
}

function fetchSeedByIdFail(error) {
  return {
    progress: false,
    seed: undefined,
    error: error,
    type: fetchSeedByIdConstants.fetchSeedByIdFail,
  };
}

function fetchSeed(seedId) {
  return () => {
    store.dispatch(fetchSeedByIdRequest());
    const promise = fetchSeedById(seedId);
    promise
      .then((response) => {
        const seed = response.data;
        store.dispatch(fetchSeedByIdSuccess(seed));
      })
      .catch((error) => {
        store.dispatch(fetchSeedByIdFail(error.message));
      });
  };
}

export {
  fetchSeed,
  fetchSeedByIdFail,
  fetchSeedByIdSuccess,
  fetchSeedByIdRequest,
};
