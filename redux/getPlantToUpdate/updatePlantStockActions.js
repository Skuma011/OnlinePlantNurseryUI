import { getPlantByName, updateStock } from "../../service/PlantService";
import store from "../store";
import updatePlantStockConstants from "./updatePlantStockConstants";

function getPlantStockSuccess(plant){

    return(
        {
            plant:plant,
            error:'',
            type:updatePlantStockConstants.success
        }
    )
}
function getPlantStockFail(error){
    
    return(
        {
            plant:'',
            error:error,
            type:updatePlantStockConstants.fail
        }
    )
}
function getPlantStockAction(data){
    
    return()=>{
        const promise = getPlantByName(data);
        promise.then(response=>store.dispatch(getPlantStockSuccess(response.data)))
        .catch(error=>store.dispatch(getPlantStockFail(error.response.data)));
    }
}

function updatePlantStockAction(data){
    return()=>{
        const promise=updateStock(data);
        promise.then(response=>store.dispatch(getPlantStockSuccess(response.data)))
        .catch(error=>store.dispatch(getPlantStockFail(error.response.data)));
    }
}

export {getPlantStockSuccess, getPlantStockFail, getPlantStockAction, updatePlantStockAction}