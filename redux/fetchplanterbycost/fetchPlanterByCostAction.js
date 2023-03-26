import fetchPlanterByCostConstants from "../../redux/fetchplanterbycost/fetchPlanterByCostConstants";
import { fetchPlanterByCost } from "../../service/PlanterService";
import store from "../store";

function fetchPlanterByCostFail(error) {
  return {
    type: fetchPlanterByCostConstants.fetchByCostFail,
    planters: '',
    error: error,
  };
}

function fetchPlanterByCostSuccess(planters) {
  return {
    type: fetchPlanterByCostConstants.fetchByCostSuccess,
    planters: planters,
    error: "",
  };
}

function fetchAllPlantersByCost(minCost, maxCost) {
  return () => {
    const promise = fetchPlanterByCost(minCost, maxCost);

    promise
      .then((response) => {
        const planters = response.data;
        store.dispatch(fetchPlanterByCostSuccess(planters));
      })
      .catch((error) => {
        console.log(error.message);
        store.dispatch(fetchPlanterByCostFail(error.response.data));
      });
  };
}

export {
  fetchPlanterByCostFail,
  fetchPlanterByCostSuccess,
  fetchAllPlantersByCost,
};
