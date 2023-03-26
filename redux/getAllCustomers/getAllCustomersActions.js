import {getAllCustomers} from "../../service/customerService";
import store from "../store";
import getAllCustomersConstants from "./getAllCustomersConstants";

function getAllCustomersSuccess(customers){
    return ({
        customers:customers,
        error:'',
        type:getAllCustomersConstants.success
    });
}

function getAllCustomersFail(error){
    return ({
        customers:'',
        error:error,
        type:getAllCustomersConstants.fail
    });
}

function getAllCustomersAction(){
    return()=>{

        const promise=getAllCustomers();
        promise.then(response=>store.dispatch(getAllCustomersSuccess(response.data)))
        .catch(error=>store.dispatch(getAllCustomersFail(error.response.data)));
    }
}

export{getAllCustomersSuccess,getAllCustomersFail, getAllCustomersAction}

