import { addPlant } from "../../service/PlantService";
import store from "../store";
import addPlantConstants from "./addPlantConstants";

function addPlantSuccess(plant){
    return(
        {
            plant:plant,
            error:'',
            type:addPlantConstants.success
        }
    );
}

function addPlantFail(error){
    return(
        {
            plant:'',
            error:error,
            type:addPlantConstants.fail
        }
    );
}

function addPlantAction(data){
    return()=>{
        const promise = addPlant(data);
        promise.then(response=>store.dispatch(addPlantSuccess(response.data)))
        .catch(error=>store.dispatch(addPlantFail(error.response.data)))
    }
}

export {addPlantSuccess, addPlantFail, addPlantAction};