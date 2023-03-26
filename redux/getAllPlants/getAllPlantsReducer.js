import getAllPlantsConstants from "./getAllPlantsConstants"

const initialState={
    plants: undefined,
    error:''
}

function getAllPlantsReducer(state=initialState, action){
    if(action.type == getAllPlantsConstants.success || action.type == getAllPlantsConstants.fail){
        let newState={...state,...action};
        return newState;
    }
    return state;
}
export default getAllPlantsReducer;