import getPlantsByTypeConstants from "./getPlantsByTypeConstants";

const initialState={
    plants:undefined,
    error:''
}
function getPlantsByTypeReducer(state=initialState, action){
    
    if(action.type == getPlantsByTypeConstants.success || action.type==getPlantsByTypeConstants.fail){
        const newState={...state, ...action};
        return newState;
    }
    return state;
}

export default getPlantsByTypeReducer;