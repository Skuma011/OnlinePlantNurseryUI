import addCustomerConstants from "./addCustomerConstants";

const initialstate={
               customer:undefined,
               error: ''};
function addCustomerReducer(state = initialstate,action){
         if(action.type===addCustomerConstants.fail||action.type===addCustomerConstants.success){
        let newState={...state,...action};
        return newState;
    }
    return state;

}
export default addCustomerReducer;