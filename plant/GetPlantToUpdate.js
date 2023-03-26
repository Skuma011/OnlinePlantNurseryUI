import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPlantStockAction } from "../../redux/getPlantToUpdate/updatePlantStockActions";
import commonStyle from './commonStyle.module.css';
import validationMessage from "./validationMessage";
import UpdatePlantStock from './UpdatePlantStock';

export default function GetPlantToUpdate() {

    // ref to fetch from form field
    const nameRef = React.createRef();

    // response object for holding global state data
    const response = useSelector(state => {
        return (
            {
                plant: state.updatePlantStock.plant,
                errMsg: state.updatePlantStock.error
            }
        );
    })

    // useDispatch hook is used to dispatch actions
    const dispatch = useDispatch();

    // Initial state object specific to this component
    const initialState = { name: undefined, validations: { name: undefined } };

    // useState hook for managing state specific to the component
    const [currentState, setNewState] = useState(initialState);

    /* 
    submitHandler is called when form is submitted.
    It checks if there is any validation error and if not, 
    then dispatches the action to update global state.
    */
    const submitHandler = (event) => {
        event.preventDefault();
        if (currentState.validations.name) {
            return;
        }
        dispatch(getPlantStockAction(currentState.name));
    }

    /*
    It is called whenever an input field is changed.
    It takes the input field values and updates the
    local state accordingly.
    */
    const changeHandler = () => {
        const fieldValue = nameRef.current.value;
        let validationMessage = validateName(fieldValue);

        const newValidations = { name: validationMessage };
        const newState = { name: fieldValue, validations: newValidations };
        setNewState(newState);
    }

    // method to validate plant common name
    const validateName = (name) => {
        if (name != "" & name.length < 3) {
            return validationMessage.invalidNameLength;
        }
        return undefined;
    }
    
    return (
        <div>
            <h3>Update Plant Stock</h3>
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label>Enter plant name to update: </label>
                        <input
                            type="text"
                            name="commonName"
                            ref={nameRef}
                            onChange={changeHandler}
                            required="true"
                            className="form-control"
                        />
                        {currentState.validations.name ? (
                            <div className={commonStyle.error}>
                                {currentState.validations.name}
                            </div>
                        ) : ''}
                    </div>
                    <button className="btn btn-primary">Get Plant</button>
                </form>
            </div>

            <div className="mt-5">
                {response.plant ? (
                    <div>
                        <div className="alert alert-success">
                            Plant to update fetched successfully!
                        </div>
                        <div>
                            <table className="table table-striped w-50">
                                <tbody>
                                    <tr>
                                        <th>Common Name</th>
                                        <td>{response.plant.commonName}</td>
                                    </tr>
                                    <tr>
                                        <th>Plant Stock</th>
                                        <td>{response.plant.plantsStock}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div>
                            <UpdatePlantStock />
                        </div>
                    </div>
                ) : ''}
                {response.errMsg ? (
                    <div className="alert alert-danger">
                        Request cannot be processed!
                        <br />
                        ERROR: {response.errMsg}
                    </div>
                ) : ''}
            </div>
        </div >
    );
}