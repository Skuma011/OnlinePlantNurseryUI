import { getPlantByName } from "../../service/PlantService";
import store from "../store";
import getPlantByNameRequestConstants from "./getPlantByNameRequestConstants";

function getPlantByNameRequestSuccess(plant){

    return(
        {
            plant:plant,
            error:'',
            type:getPlantByNameRequestConstants.success
        }
    )
}
function getPlantByNameRequestFail(error){
    
    return(
        {
            plant:'',
            error:error,
            type:getPlantByNameRequestConstants.fail
        }
    )
}
function getPlantByNameRequestAction(data){
    
    return()=>{
    const promise = getPlantByName(data);
    promise.then(response=>store.dispatch(getPlantByNameRequestSuccess(response.data)))
    .catch(error=>store.dispatch(getPlantByNameRequestFail(error.response.data)));
}
}

export {getPlantByNameRequestSuccess, getPlantByNameRequestFail, getPlantByNameRequestAction}