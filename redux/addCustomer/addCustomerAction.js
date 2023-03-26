import {addCustomer} from "../../service/customerService";
import store from "../store";
import addCustomerConstants from "./addCustomerConstants";

function addCustomerSuccess(customer){

console.log("Inside add Customer Service")
return({customer:customer,error : "",type : addCustomerConstants.success});


}

function addCustomerfail(error){
return({customer:'',error:error,type : addCustomerConstants.fail});

}

function addCustomerAction(data){ return()=>{
    const promise = addCustomer(data);
    promise.then(response=>store.dispatch(addCustomerSuccess(response.data)))
    .catch(error=>store.dispatch(addCustomerfail(error.response.data)));
}
}
   


export{addCustomerAction,addCustomerSuccess,addCustomerfail};