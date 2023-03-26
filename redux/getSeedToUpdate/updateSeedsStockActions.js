import { fetchSeedByName, updateSeedsStock } from "../../service/SeedService";
import store from "../store";
import updateSeedsStockConstants from "./updateSeedsStockConstants";

function getSeedsStockSuccess(seed) {
  return {
    seed: seed,
    error: "",
    type: updateSeedsStockConstants.success,
  };
}
function getSeedsStockFail(seed) {
  return {
    seed: "",
    seed: seed,
    type: updateSeedsStockConstants.fail,
  };
}
function getSeedsStockAction(data) {
  return () => {
    const promise = fetchSeedByName(data);
    promise
      .then((response) => store.dispatch(getSeedsStockSuccess(response.data)))
      .catch((error) => store.dispatch(getSeedsStockFail(error.response.data)));
  };
}

function updateSeedsStockAction(data) {
  return () => {
    const promise = updateSeedsStock(data);
    promise
      .then((response) => store.dispatch(getSeedsStockSuccess(response.data)))
      .catch((error) => store.dispatch(getSeedsStockFail(error.response.data)));
  };
}

export {
  getSeedsStockSuccess,
  getSeedsStockFail,
  getSeedsStockAction,
  updateSeedsStockAction,
};
