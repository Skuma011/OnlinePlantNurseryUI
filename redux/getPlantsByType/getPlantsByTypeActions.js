import { getPlantsByType } from "../../service/PlantService";
import store from "../store";
import getPlantsByTypeConstants from "./getPlantsByTypeConstants";

function getPlantsByTypeSuccess(plants){

    return(
        {
            plants:plants,
            error:'',
            type:getPlantsByTypeConstants.success
        }
    )
}
function getPlantsByTypeFail(error){

    return(
        {
            plants:'',
            error:error,
            type:getPlantsByTypeConstants.fail
        }
    )
}
function getPlantsByTypeAction(data){

    return()=>{
       const promise=getPlantsByType(data);
       promise.then(response=>store.dispatch(getPlantsByTypeSuccess(response.data)))
       .catch(error=>store.dispatch(getPlantsByTypeFail(error.response.data)))
        
    }
}

export {getPlantsByTypeSuccess, getPlantsByTypeFail, getPlantsByTypeAction}