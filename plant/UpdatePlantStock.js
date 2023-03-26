import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { updatePlantStockAction } from "../../redux/getPlantToUpdate/updatePlantStockActions";
import commonStyle from './commonStyle.module.css';
import validationMessage from "./validationMessage";

export default function UpdatePlantStock(){

    // ref to fetch from form field
    const stockRef = React.createRef();

    // response object for holding global state data
    const response = useSelector(state => {
        return (
            {
                plant: state.updatePlantStock.plant,
                errMsg: state.updatePlantStock.error
            }
        );
    })

    // Initial state object specific to this component
    const initialState={plantStock:undefined, updated:undefined, validations:{plantStock:undefined}};

    // useState hook for managing state specific to the component
    const [currentState, setNewState] = useState(initialState);

    // useDispatch hook is used to dispatch actions
    const dispatch=useDispatch();

    /* 
    submitHandler is called when form is submitted.
    It checks if there is any validation error and if not, 
    then dispatches the action to update global state.
    */
    const submitHandler = (event)=>{
        event.preventDefault();
        if(currentState.validations.plantStock){
            return;
        }
        let data={plantId:response.plant.plantId, plantStock:currentState.plantStock}
        
        dispatch(updatePlantStockAction(data))
        setNewState({...currentState, updated:true})
        stockRef.current.value="";
    }

    /*
    It is called whenever an input field is changed.
    It takes the input field values and updates the
    local state accordingly.
    */
    const changeHandler = ()=>{
        const fieldValue = stockRef.current.value;
        let validationMessage = validateStock(fieldValue);
        const newValidations = {plantStock:validationMessage};
        const newState = {plantStock:fieldValue, validations:newValidations};
        setNewState(newState);
    }

    // method to validate plant stock
    const validateStock=(plantStock)=>{
        if(plantStock!=="" && plantStock<=0){
            return validationMessage.lessThanZero;
        }
        return undefined;
    }

    return(
        <div>
            <div className="mt-5 mb-5">
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                    <label>Enter updated stock :</label>
                    <input
                        name="plantStock"
                        type="number"
                        ref={stockRef}
                        onChange = {changeHandler}
                        required = {true}
                        className="form-control" 
                    />
                    {currentState.validations.plantStock?(
                        <div className={commonStyle.error}>
                            {currentState.validations.plantStock}
                        </div>
                    ):''}
                    </div>
                        <button className="btn btn-primary">Save Changes</button>  
                </form>    
                {currentState.updated?(
                    <div className="alert alert-success mt-3">
                        Plant stock updated successfully!
                    </div>
                ):''}             
            </div>                    
        </div>
    );
}