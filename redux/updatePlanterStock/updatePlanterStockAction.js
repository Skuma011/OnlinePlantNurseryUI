import updatePlanterStockConstants from "./updatePlanterStockConstants";
import store from "../store";
import { updatePlanterStockService } from "../../service/PlanterService";

function updatePlanterStockSuccess(planter) {
  return {
    planter: planter,
    error: "",
    type: updatePlanterStockConstants.success,
  };
}

function updatePlanterStockFail(error) {
  return {
    planter: "",
    error: error,
    type: updatePlanterStockConstants.fail,
  };
}

function updateStock(data) {
  return () => {
    const promise = updatePlanterStockService(data);
    promise
      .then((response) => {
        const planter = response.data;
        store.dispatch(updatePlanterStockSuccess(planter));
      })
      .catch((error) => {
        let actionObj = updatePlanterStockFail(error.response.data);
        store.dispatch(actionObj);
      });
  };
}

export { updateStock, updatePlanterStockSuccess, updatePlanterStockFail };
