import { addSeed } from "../../service/SeedService";
import store from "../store";
import addSeedConstants from "./addSeedConstants";

function addSeedSuccess(seed) {
  return {
    seed: seed,
    error: "",
    type: addSeedConstants.success,
  };
}
function addSeedFail(error) {
  return {
    seed: "",
    error: error,
    type: addSeedConstants.fail,
  };
}

function addSeedAction(data) {
  return () => {
    const promise = addSeed(data);
    promise
      .then((response) => {
        const seed = response.data;
        let actionObj = addSeedSuccess(seed);
        store.dispatch(actionObj);
      })
      .catch((error) => {
        let actionObj = addSeedFail(error.message);
        store.dispatch(actionObj);
      });
  };
}
export { addSeedAction, addSeedSuccess, addSeedFail };
