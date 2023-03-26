import { addPlanter } from "../../service/PlanterService";
import store from "../store";
import addPlanterConstants from "./addPlanterConstants";

function addPlanterSuccess(planter) {
  console.log("Inside add Planter Service");
  return { planter: planter, error: "", type: addPlanterConstants.success };
}
function addPlanterFail(error) {
  return { planter: undefined, error: error, type: addPlanterConstants.fail };
}

function addPlanterAction(data) {
  return () => {
    console.log("Inside add plnater action");

    const promise = addPlanter(data);
    promise
      .then((response) => {
        const planter = response.data;
        let actionObj = addPlanterSuccess(planter);
        store.dispatch(actionObj);
      })
      .catch((error) => {
        let actionObj = addPlanterFail(error.message);
        console.log("Inside addPlanter Action error", error.response.data);
        store.dispatch(actionObj);
      });
  };
}
export { addPlanterAction };
