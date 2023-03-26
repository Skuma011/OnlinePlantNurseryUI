import { fetchSeedsByType } from "../../service/SeedService";
import store from "../store";
import fetchAllSeedsByTypeConstants from "./fetchAllSeedsByTypeConstants";

function fetchAllSeedsByTypeRequest() {
  return {
    progress: true,
    seeds: [],
    error: "",
    type: fetchAllSeedsByTypeConstants.fetchAllSeedsByTypeRequest,
  };
}

function fetchAllSeedsByTypeSuccess(seeds) {
  return {
    progress: false,
    seeds: seeds,
    error: "",
    type: fetchAllSeedsByTypeConstants.fetchAllSeedsByTypeSuccess,
  };
}

function fetchAllSeedsByTypeFail(error) {
  return {
    progress: false,
    seeds: [],
    error: error,
    type: fetchAllSeedsByTypeConstants.fetchAllSeedsByTypeFail,
  };
}

function fetchAllSeedsByType(typeOfSeeds){

    return ()=>{        
       store.dispatch(fetchAllSeedsByTypeRequest());
       const promise=fetchSeedsByType(typeOfSeeds);
       promise.then((response)=>{
           const seeds=response.data;
           store.dispatch(fetchAllSeedsByTypeSuccess(seeds));
       }).catch(error=>{
           store.dispatch(fetchAllSeedsByTypeFail(error.response.data));
       }) 

    }

}

export {
  fetchAllSeedsByType,
  fetchAllSeedsByTypeFail,
  fetchAllSeedsByTypeSuccess,
  fetchAllSeedsByTypeRequest,
};
