import addPlantConstants from './addPlantConstants';

const initialState={
    plant:undefined,
    error:''
}

function addPlantReducer(state=initialState, action){
    
    if(action.type===addPlantConstants.success || action.type===addPlantConstants.fail){
        let newState={...state,...action};
        return newState;
    }

    return state;
}

export default addPlantReducer;