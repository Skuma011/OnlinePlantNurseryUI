import getPlantByNameRequestConstants from "./getPlantByNameRequestConstants";

const initialState={
    plant:undefined,
    error:''
}
function getPlantByNameRequestReducer(state=initialState, action){
    
    if(action.type == getPlantByNameRequestConstants.success || action.type==getPlantByNameRequestConstants.fail){
        const newState={...state, ...action};
        return newState;
    }
    return state;
}

export default getPlantByNameRequestReducer;