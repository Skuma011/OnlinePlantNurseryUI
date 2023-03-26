import getPlantByNameConstants from "./getPlantByNameConstants"

const initialState={
    plant: undefined,
    error:''
}

function getPlantByNameReducer(state=initialState, action){

    if(action.type == getPlantByNameConstants.success || action.type==getPlantByNameConstants.fail){

        let newState={...state,...action};
        return newState;
    }

    return state;
}

export default getPlantByNameReducer;