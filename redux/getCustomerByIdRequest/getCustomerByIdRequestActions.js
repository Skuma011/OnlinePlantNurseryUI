import {getCustomer, updateCustomerName} from "../../service/customerService";
import store from '../store';
import getCustomerByIdRequestConstants from "./getCustomerByIdRequestConstants";


function getCustomerByIdRequestSuccess(customer){
    return({
      
        customer:customer,
        error: '',
        type: getCustomerByIdRequestConstants.getByIdSuccess
    });
}

function getCustomerByIdRequestFail(error){
    return({
    
        customer:'',
        error: error,
        type: getCustomerByIdRequestConstants.getByIdFail
    });
}


function getCustomerByIdRequestActions(data){
   return()=>{
       const promise = getCustomer(data);
       promise.then(response=>store.dispatch(getCustomerByIdRequestSuccess(response.data)))
       .catch(error=>store.dispatch(getCustomerByIdRequestFail(error.response.data)));
   }
}

function updateCustomerNameAction(data){
    return()=>{
        const promise = updateCustomerName(data);
        promise.then(response=>store.dispatch(getCustomerByIdRequestSuccess(response.data)))
        .catch(error=>store.dispatch(getCustomerByIdRequestFail(error.response.data)));
    }
}

export {getCustomerByIdRequestActions, getCustomerByIdRequestSuccess,getCustomerByIdRequestFail, updateCustomerNameAction };