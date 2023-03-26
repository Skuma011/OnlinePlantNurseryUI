import updatePlantStockConstants from "./updatePlantStockConstants"

const initialState={
    plant:undefined,
    error:''
}
function updatePlantStockReducer(state=initialState, action){

    if(action.type == updatePlantStockConstants.success ||  action.type == updatePlantStockConstants.fail){

        let newState = {...state,...action};
        return newState;
    }
    return state;
}

export default updatePlantStockReducer;