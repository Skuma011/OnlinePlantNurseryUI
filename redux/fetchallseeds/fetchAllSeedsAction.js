import { fetchAll } from "../../service/SeedService";
import store from "../store";
import fetchAllSeedsConstants from "./fetchAllSeedsConstants";

function fetchAllSeedsRequest() {
  return {
    progress: true,
    seeds: [],
    error: "",
    type: fetchAllSeedsConstants.fetchAllSeedsRequest,
  };
}

function fetchAllSeedsSuccess(seeds) {
  return {
    progress: false,
    seeds: seeds,
    error: "",
    type: fetchAllSeedsConstants.fetchAllSeedsSuccess,
  };
}

function fetchAllSeedsFail(error) {
  return {
    progress: false,
    seeds: [],
    error: error,
    type: fetchAllSeedsConstants.fetchAllSeedsFail,
  };
}

function fetchAllSeeds() {
  return () => {
    store.dispatch(fetchAllSeedsRequest());
    const promise = fetchAll();
    promise
      .then((response) => {
        const seeds = response.data;
        store.dispatch(fetchAllSeedsSuccess(seeds));
      })
      .catch((error) => {
        store.dispatch(fetchAllSeedsFail(error.message));
      });
  };
}

export {
  fetchAllSeeds,
  fetchAllSeedsFail,
  fetchAllSeedsSuccess,
  fetchAllSeedsRequest,
};
