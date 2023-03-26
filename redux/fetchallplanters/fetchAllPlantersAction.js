import { fetchAll } from "../../service/PlanterService";
import store from "../store";
import fetchAllPlantersConstants from "./fetchAllPlantersConstants";
function fetchAllPlantersRequest() {
  return {
    progress: true,
    planters: [],
    error: "",
    type: fetchAllPlantersConstants.fetchAllPlantersRequest,
  };
}

function fetchAllPlantersSuccess(planters) {
  return {
    progress: false,
    planters: planters,
    error: "",
    type: fetchAllPlantersConstants.fetchAllPlantersSuccess,
  };
}

function fetchAllPlantersFail(error) {
  return {
    progress: false,
    planters: [],
    error: error,
    type: fetchAllPlantersConstants.fetchAllPlantersFail,
  };
}
function fetchAllPlanters() {
  return () => {
    store.dispatch(fetchAllPlantersRequest());
    const promise = fetchAll();
    promise
      .then((response) => {
        const planters = response.data;
        store.dispatch(fetchAllPlantersSuccess(planters));
      })
      .catch((error) => {
        store.dispatch(fetchAllPlantersFail(error.response.data));
      });
  };
}

export {
  fetchAllPlanters,
  fetchAllPlantersRequest,
  fetchAllPlantersFail,
  fetchAllPlantersSuccess,
};
