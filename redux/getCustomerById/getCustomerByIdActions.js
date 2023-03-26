import { getCustomer } from "../../service/customerService";
import store from '../store';
import getCustomerByIdConstants from "./getCustomerByIdConstants";



function getCustomerByIdSuccess(customer){
    return({
      
        customer:customer,
        error: '',
        type: getCustomerByIdConstants.getByIdSuccess
    });
}

function getCustomerByIdFail(error){
    return({
    
        customer:'',
        error: error,
        type: getCustomerByIdConstants.getByIdFail
    });
}




function getCustomerByIdActions(data){
    return()=>{
        const promise = getCustomer(data);
        promise.then(response=>store.dispatch(getCustomerByIdSuccess(response.data)))
        .catch(error=>store.dispatch(getCustomerByIdFail(error.response.data)));
    }
    
}




export { getCustomerByIdActions,getCustomerByIdSuccess,getCustomerByIdFail };