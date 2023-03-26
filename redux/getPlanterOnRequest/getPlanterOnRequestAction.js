import { fetchPlanter } from "../../service/PlanterService";
import store from "../store";
import getPlanterOnRequestConstant from "./getPlanterOnRequestConstants";

function getPlanterOnRequestSuccess(planter) {
  return {
    type: getPlanterOnRequestConstant.success,
    planter: planter,
    error: "",
  };
}

function getPlanterOnRequestFail(error) {
  return {
    type: getPlanterOnRequestConstant.fail,
    planter: undefined,
    error: error,
  };
}
function getPlanterOnRequest(id) {
  return () => {
    const promise = fetchPlanter(id);
    promise
      .then((response) => {
        const planter = response.data;
        const actionObj = getPlanterOnRequestSuccess(planter);
        store.dispatch(actionObj);
      })
      .catch((error) => {
        const actionObj = getPlanterOnRequestFail(error.response.data);
        store.dispatch(actionObj);
      });
  };
}
export {
  getPlanterOnRequest,
  getPlanterOnRequestSuccess,
  getPlanterOnRequestFail,
};
