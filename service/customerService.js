import axios from "axios";
const baseUrl = "http://localhost:8585";

// method to add customer to the database
function addCustomer(data){
    const url = baseUrl + "/customer/add";
    let requestData = {
        
        customerName : data.customerName,
        customerEmail : data.customerEmail,
        username : data.username,
        password : data.password,
        houseNo : data.houseNo,
        colony : data.colony,
        city : data.city,
        state : data.state,
        pincode : data.pincode,

    };


    console.log("Inside add Customer service");
    const promise = axios.post(url, requestData);
    return promise;

    
}

// method to fetch customer from the database using id
 function getCustomer(id){
    const url = baseUrl + "/customer/fetch/byid/" + id  ;
    const promise = axios.get(url);
    return promise;
}

// method to update customer name in the database
function updateCustomerName(data){
    const url= baseUrl + "/customer/changename" ;
    let requestData={
        id: data.id,
        customerName: data.customerName
    };
    const promise = axios.put(url, requestData);
    return promise;

}

// method to fetch all customers from the database
function getAllCustomers(){
    const url = baseUrl + "/customer/fetch";
    const promise = axios.get(url);
    return promise;
}
export {addCustomer,getCustomer, updateCustomerName,getAllCustomers};