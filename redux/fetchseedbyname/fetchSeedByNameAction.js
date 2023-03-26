import { fetchSeedByName } from "../../service/SeedService";
import store from "../store";
import fetchSeedByNameConstants from "./fetchSeedByNameConstants";

function fetchSeedByNameRequest() {
  return {
    progress: true,
    seed: undefined,
    error: "",
    type: fetchSeedByNameConstants.fetchSeedByNameRequest,
  };
}

function fetchSeedByNameSuccess(seed) {
  return {
    progress: false,
    seed: seed,
    error: "",
    type: fetchSeedByNameConstants.fetchSeedByNameSuccess,
  };
}

function fetchSeedByNameFail(error) {
  return {
    progress: false,
    seed: undefined,
    error: error,
    type: fetchSeedByNameConstants.fetchSeedByNameFail,
  };
}

function fetchSeedByCommonName(commonName) {
  return () => {
    store.dispatch(fetchSeedByNameRequest());
    const promise = fetchSeedByName(commonName);
    promise
      .then((response) => {
        const seed = response.data;
        store.dispatch(fetchSeedByNameSuccess(seed));
      })
      .catch((error) => {
        store.dispatch(fetchSeedByNameFail(error.message));
      });
  };
}

export {
  fetchSeedByCommonName,
  fetchSeedByNameFail,
  fetchSeedByNameSuccess,
  fetchSeedByNameRequest,
};
