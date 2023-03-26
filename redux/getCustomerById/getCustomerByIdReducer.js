import getCustomerByIdConstants from "./getCustomerByIdConstants";
const initialState={
    customer:undefined,
    error:''
}

function getCustomerByIdReducer(state=initialState,action){

    if(
        action.type==getCustomerByIdConstants.getByIdSuccess||
        action.type==getCustomerByIdConstants.getByIdFail
    ){
        let newState={...state,...action};
        return newState;
    }
    return state;

}

  export default getCustomerByIdReducer;