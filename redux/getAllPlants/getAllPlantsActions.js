import { getAllPlants } from "../../service/PlantService";
import store from "../store";
import getAllPlantsConstants from "./getAllPlantsConstants";

function getAllPlantsSuccess(plants){

    return ({
            plants:plants, 
            error:'', 
            type:getAllPlantsConstants.success
        });
}

function getAllPlantsFail(error){

    return({
            plants:'',
            error:error,
            type:getAllPlantsConstants.fail 
        });
}

function getAllPlantsAction(){

    return()=>{
        const promise = getAllPlants();
        promise.then(response=>store.dispatch(getAllPlantsSuccess(response.data)))
        .catch(error=>store.dispatch(getAllPlantsFail(error.response.data)));
    }
}
export {getAllPlantsSuccess, getAllPlantsFail, getAllPlantsAction};