
import getCustomerByIdRequestConstants from './getCustomerByIdRequestConstants';

const initialState={
    customer: undefined,
    error:''
}

function getCustomerByIdRequestReducer(state=initialState,action){
    if (action.type==getCustomerByIdRequestConstants.getByIdSuccess|| 
        action.type==getCustomerByIdRequestConstants.getByIdFail){
            const newState={...state,...action};
            return newState;
        }
        return state;

}

export default getCustomerByIdRequestReducer;