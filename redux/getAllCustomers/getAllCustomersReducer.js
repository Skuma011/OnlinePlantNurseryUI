import getAllCustomersConstants from "./getAllCustomersConstants";

const initialState={
    customers:undefined,
    error:''
}

function getAllCustomersReducer(state=initialState,action){
    if(action.type==getAllCustomersConstants.success || action.type==getAllCustomersConstants.fail){
        let newState={...state,...action};
        return newState;
    }
    return state;
}

export default getAllCustomersReducer;