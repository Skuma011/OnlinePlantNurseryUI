  
import axios from 'axios';

const baseUrl = "http://localhost:8585/orders";

function addOrder(data){
    const url = baseUrl+"/add";
    console.log("service",data);
    let requestData = {
        transactionMode: data.transactionMode,
        quantity: data.quantity,
        planterId: data.planterId
    };
    const promise = axios.post(url, requestData);
    return promise;
}

function getOrderById(bookingOrderId){
    const url=baseUrl+"/fetch/byid/"+bookingOrderId;
    const promise = axios.get(url);
    return promise;
}


function getAllOrder(){
    const url=baseUrl+"/fetch";
    const promise = axios.get(url);
    return promise;
}



export {addOrder, getOrderById, getAllOrder};