import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllCustomersAction} from "../../redux/getAllCustomers/getAllCustomersActions";
import DisplayCustomerList from "./DisplayCustomerList";

export default function GetAllCustomers(){

    // response object for holding global state data
    const response = useSelector(state=>{
        return(
            {
                customers: state.getAllCustomers.customers,
                error:state.getAllCustomers.error
            }
        );
    })

    // useDispatch hook is used to dispatch actions
    const dispatch = useDispatch();

    // method to dispatch action
    const getAllCustomers =()=>{
        dispatch(getAllCustomersAction());
    };


    // useEffect hook is used to call getAllCustomers() when page is rendered
    useEffect(getAllCustomers,[]);

    return(
        <div>
            <h3>Get All Customers</h3>
            <div className="mt-5">
                <div>
                    <ul>
                        {response.customers ?(
                            <div>
                                <div className ="alert alert-success">
                                    All Customers Fetched successfully!
                                </div>
                                <div>
                                    <DisplayCustomerList customers={response.customers}/>
                                </div>
                            </div>
                        ): ''}
                    </ul>
                </div>
                {response.error? (
                    <div className="alert alert-danger">
                        Request Unsuccessful!
                        <br/>
                        {response.error}
                        </div>
                ): ''}
            </div>
        </div>
    );


    
}