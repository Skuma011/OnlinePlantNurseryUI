import { getPlantByName } from "../../service/PlantService";
import store from "../store";
import getPlantByNameConstants from "./getPlantByNameConstants";

function getPlantByNameSuccess(plant){
    return ({
            plant:plant, 
            error:'', 
            type:getPlantByNameConstants.success
        });
}

function getPlantByNameFail(error){
    return ({
        plant:'', 
        error:error, 
        type:getPlantByNameConstants.fail
    });
}

function getPlantByNameAction(data){

    return()=>{
    const promise = getPlantByName(data);
    promise.then(response=>store.dispatch(getPlantByNameSuccess(response.data)))
    .catch(error=>store.dispatch(getPlantByNameFail(error.response.data)));
    }
}

export {getPlantByNameSuccess, getPlantByNameFail, getPlantByNameAction};