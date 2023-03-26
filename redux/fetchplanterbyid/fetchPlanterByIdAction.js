import { fetchPlanter } from "../../service/PlanterService";
import store from "../store";
import fetchPlanterByIdConstants from "./fetchPlanterByIdConstants";

function fetchPlanterByIdRequest() {
  return {
    progress: true,
    planter: undefined,
    error: "",
    type: fetchPlanterByIdConstants.fetchByIdRequest,
  };
}

function fetchPlanterByIdSuccess(planter) {
  return {
    progress: false,
    planter: planter,
    error: "",
    type: fetchPlanterByIdConstants.fetchByIdSuccess,
  };
}

function fetchPlanterByIdFail(error) {
  return {
    progress: false,
    planter: undefined,
    error: error,
    type: fetchPlanterByIdConstants.fetchByIdFail,
  };
}

function fetchPlanterById(planterId) {
  return () => {
    store.dispatch(fetchPlanterByIdRequest());
    const promise = fetchPlanter(planterId);
    promise
      .then((response) => {
        const planter = response.data;
        store.dispatch(fetchPlanterByIdSuccess(planter));
      })
      .catch((error) => {
        store.dispatch(fetchPlanterByIdFail(error.response.data));
      });
  };
}

export {
  fetchPlanterById,
  fetchPlanterByIdFail,
  fetchPlanterByIdSuccess,
  fetchPlanterByIdRequest,
};
