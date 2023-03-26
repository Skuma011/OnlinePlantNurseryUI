import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import addPlantReducer from "./addPlant/addPlantReducer";
import getAllPlantsReducer from "./getAllPlants/getAllPlantsReducer";
import getPlantByNameReducer from "./getPlantByName/getPlantByNameReducer";
import getPlantByNameRequestReducer from "./getPlantByNameRequest/getPlantByNameRequestReducer";
import getPlantsByTypeReducer from "./getPlantsByType/getPlantsByTypeReducer";
import updatePlantStockReducer from "./getPlantToUpdate/updatePlantStockReducer";


import addPlanterReducer from "./addplanter/addPlanterReducer";
import fetchAllPlantersReducer from "./fetchallplanters/fetchAllPlantersReducer";
import fetchPlanterByCostReducer from "./fetchplanterbycost/fetchPlanterByCostReducer";
import fetchPlanterByIdReducer from "./fetchplanterbyid/fetchPlanterByIdReducer";
import fetchPlanterByShapeReducer from "./fetchplanterbyshape/fetchPlanterByShapeReducer";
import getPlanterOnRequestReducer from "./getPlanterOnRequest/getPlanterOnRequestReducer";

import addSeedReducer from "./addseed/addSeedReducer";
import fetchAllSeedsReducer from "./fetchallseeds/fetchAllSeedsReducer";
import fetchAllSeedsByTypeReducer from "./fetchallseedsbytype/fetchAllSeedsByTypeReducer";
import fetchSeedByIdReducer from "./fetchseedbyid/fetchSeedByIdReducer";
import fetchSeedByNameReducer from "./fetchseedbyname/fetchSeedByNameReducer";
import updateSeedsStockReducer from "./getSeedToUpdate/updateSeedsStockReducer";

import addCustomerReducer from "./addCustomer/addCustomerReducer";
import getCustomerByIdReducer from "./getCustomerById/getCustomerByIdReducer";
import getCustomerByIdRequestReducer from "./getCustomerByIdRequest/getCustomerByIdRequestReducer";
import getAllCustomersReducer from "./getAllCustomers/getAllCustomersReducer";

import { composeWithDevTools } from "redux-devtools-extension";
import updatePlanterStockReducer from './updatePlanterStock/updatePlanterStockReducer';

const store = createStore(

  combineReducers({
    addPlant: addPlantReducer,
    getAllPlants: getAllPlantsReducer,
    getPlantByName: getPlantByNameReducer,
    getPlantByNameRequest: getPlantByNameRequestReducer,
    getPlantsByType: getPlantsByTypeReducer,
    updatePlantStock: updatePlantStockReducer,

    addPlanter: addPlanterReducer,
    fetchAllPlanters: fetchAllPlantersReducer,
    getPlanterOnRequest: getPlanterOnRequestReducer,
    fetchAllPlantersByShape: fetchPlanterByShapeReducer,
    fetchAllPlantersByCost: fetchPlanterByCostReducer,
    fetchPlanterById: fetchPlanterByIdReducer,
    updatePlanterStock:updatePlanterStockReducer,

    addSeed: addSeedReducer,
    fetchAllSeeds: fetchAllSeedsReducer,
    fetchAllSeedsByType: fetchAllSeedsByTypeReducer,
    fetchSeed: fetchSeedByIdReducer,
    fetchSeedByCommonName: fetchSeedByNameReducer,
    updateSeedsStock: updateSeedsStockReducer,

    addCustomer:addCustomerReducer,
    getCustomerById:getCustomerByIdReducer,
    getCustomerByIdRequest: getCustomerByIdRequestReducer,
    getAllCustomers: getAllCustomersReducer
  }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
