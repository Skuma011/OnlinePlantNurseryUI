import axios from "axios";
import { data } from "jquery";
const baseUrl = "http://localhost:8585";

function fetchPlanter(id) {
  const url = baseUrl + "/planter/fetch/byid/" + id;
  console.log("Inside fetch by planter Service with Id", +id);
  const promise = axios.get(url);
  return promise;
}

function addPlanter(data) {
  const url = baseUrl + "/planter/add";
  let requestData = {
    planterHeight: data.planterHeight,
    planterCapacity: data.planterCapacity,
    drainageHoles: data.drainageHoles,
    planterColor: data.planterColor,
    planterShape: data.planterShape,
    planterStock: data.planterStock,
    planterCost: data.planterCost,
    plantId: data.plantId,
    seedId: data.seedId,
  };
  console.log("Inside add planter service");
  console.log(data);
  const promise = axios.post(url, requestData);
  return promise;
}

function fetchPlanterByShape(planterShape) {
  const url = baseUrl + "/planter/fetch/byshape/" + planterShape;
  console.log("Inside fetch by PlanterShape with shape " + planterShape);
  const promise = axios.get(url);
  return promise;
}
function fetchPlanterByCost(minCost, maxCost) {
  const url = baseUrl + "/planter/fetch/bycost/" + minCost + "/" + maxCost;
  console.log("Inside fetch by PlanterCost " + url);
  const promise = axios.get(url);
  return promise;
}

function fetchAll() {
  const url = baseUrl + "/planter/fetch";
  const promise = axios.get(url);
  return promise;
}

function updatePlanterStockService(data) {
  const url = baseUrl + "/planter/updatestock";
  let requestData = {
    planterId: data.planterId,
    planterStock: data.planterStock,
  };
  console.log("Inside update Planter Stock");

  const promise = axios.put(url, requestData);
  return promise;
}

export {
  fetchPlanter,
  addPlanter,
  fetchPlanterByShape,
  fetchPlanterByCost,
  fetchAll,
  updatePlanterStockService,
};
