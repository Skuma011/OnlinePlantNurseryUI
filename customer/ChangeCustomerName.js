import React, { useState } from "react";
import DisplayCustomer from "./DisplayCustomer";
import validationMessage from '../../validationMessage';
import commonStyle from "./commonStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateCustomerNameAction } from "../../redux/getCustomerByIdRequest/getCustomerByIdRequestActions";

export default function ChangeCustomerName() {

    // ref to fetch customer name from form field
    const customerNameref = React.createRef();

    // Initial state object specific to this component
    const initialState = {
        customerName: undefined,
        formstatus: "",
        validations: { customerName: undefined }
    };

    // response object for holding global state data
    const response = useSelector(state => {
        return (
            {
                customer: state.getCustomerByIdRequest.customer,
                errMsg: state.getCustomerByIdRequest.error
            }
        );
    })

    // useState hook for managing state specific to the component
    const [state, setNewState] = useState(initialState);

    // useDispatch hook is used to dispatch actions
    const dispatch = useDispatch();

    /* 
    submitHandler is called when form is submitted.
    It checks if there is any validation error and if not, 
    then dispatches the action to update global state.
    */
    const submitHandler = (event) => {
        event.preventDefault();
        if (state.validations.customerName) {
            return;
        }
        let data = { id: response.customer.customerId, customerName: state.customerName }
        dispatch(updateCustomerNameAction(data))
        setNewState({ ...state })
        customerNameref.current.value = "";
    }

    /*
    This method called whenever an input field is changed.
    It takes the input field values and updates the
    local state accordingly.
    */
    const changeHandler = () => {
        const fieldValue = customerNameref.current.value;
        let validationMsg = validateCustomerName(fieldValue);


        const newValidations = { customerName: validationMsg };
        const newState = {
            ...state,
            customerName: fieldValue,
            validations: newValidations
        };

        setNewState(newState);

    };

    //method to validate customer name
    const validateCustomerName = (customerName) => {
        if (customerName.length <= 1) {
            return validationMessage.invalidName;
        }
        return undefined;
    }

    return (
        <div>
            <h3> Change Customer Name</h3>
            <br />
            <form onSubmit={(event) => submitHandler(event)}>

                <div className="form-group">
                    <label>Enter New Name</label>
                    <input name="customerName" type="text" ref={customerNameref} onChange={changeHandler} className="form-control" />

                    {state.validations.customerName ? (
                        <div className={commonStyle.error}>
                            {state.validations.customerName}
                        </div>
                    ) : (
                        ""
                    )}
                </div>
                <button className="btn btn-primary" >Change</button>
            </form>

            <br />
            {response.customer ? (
                <div>
                    {state.formstatus}
                    <br />
                    <DisplayCustomer customer={response.customer} />
                </div>
            ) : (
                ""
            )}
            {response.errMsg ? (
                <div>
                    Name not updated
                    <br />
                    {response.errMsg}
                </div>
            ) : (
                ""
            )}
        </div>
    );
}