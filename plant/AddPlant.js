import React, { useState } from 'react';
import DisplayPlant from './DisplayPlant';
import commonStyle from './commonStyle.module.css';
import validationMessage from './validationMessage';
import { useDispatch, useSelector } from 'react-redux';
import { addPlantAction } from '../../redux/addPlant/addPlantActions';

export default function AddPlant() {

    // Refs for fetching value from form fields
    const plantHeightRef = React.createRef();
    const plantSpreadRef = React.createRef();
    const commonNameRef = React.createRef();
    const bloomTimeRef = React.createRef();
    const plantUseRef = React.createRef();
    const difficultyLevelRef = React.createRef();
    const temperatureRef = React.createRef();
    const typeOfPlantRef = React.createRef();
    const plantDescriptionRef = React.createRef();
    const plantStockRef = React.createRef();
    const plantCostRef = React.createRef();

    // Initial state object specific to this component
    const initialState = {
        plantHeight: undefined,
        plantSpread: undefined,
        commonName: undefined,
        bloomTime: undefined,
        plantUse: undefined,
        difficultyLevel: undefined,
        temperature: undefined,
        typeOfPlant: undefined,
        plantDescription: undefined,
        plantStock: undefined,
        plantCost: undefined,
        validations: {plantHeight: undefined,
                      plantSpread: undefined,
                      commonName: undefined,
                      bloomTime: undefined,
                      difficultyLevel: undefined,
                      temperature: undefined,
                      typeOfPlant: undefined,
                      plantStock: undefined,
                      plantCost: undefined,}
    };

    // response object for holding global state data
    const response = useSelector(state=>{ 
        return (
            {
                plant: state.addPlant.plant,
                errMsg: state.addPlant.error
            }
        );
    });

    // useState hook for managing state specific to the component
    const [currentState, setNewState] = useState(initialState);

    // useDispatch hook is used to dispatch actions
    const dispatch = useDispatch();

    /* 
    submitHandler is called when form is submitted.
    It checks if there is any validation error and if not, 
    then dispatches the action to update global state.
    */
    const submitHandler = (event) => {
        event.preventDefault();
        if(currentState.validations.plantHeight 
        || currentState.validations.plantSpread 
        || currentState.validations.commonName
        || currentState.validations.bloomTime 
        || currentState.validations.difficultyLevel
        || currentState.validations.temperature 
        || currentState.validations.typeOfPlant
        || currentState.validations.plantStock
        || currentState.validations.plantCost){
            return;
        }
        let data = { ...currentState };
        dispatch(addPlantAction(data));
    }

    /*
    It is called whenever an input field is changed.
    It takes the input field values and updates the
    local state accordingly.
    */
    const changeHandler = (ref) => {
        const fieldName = ref.current.name;
        const fieldValue = ref.current.value;
        let validationMessage;

        const integerFieldRefs = [plantHeightRef, plantSpreadRef, bloomTimeRef, temperatureRef, plantStockRef, plantCostRef]
        if(integerFieldRefs.includes(ref)){
            validationMessage = validateIntegerField(fieldValue);
        }
        if(ref === difficultyLevelRef){
            validationMessage = validateDifficultyLevel(fieldValue);
        }
        if(ref === typeOfPlantRef){
            validationMessage = validatePlantType(fieldValue);
        }
        if(ref === commonNameRef){
            validationMessage = validateName(fieldValue);
        }
        const newValidations = {...currentState.validations, [fieldName]:validationMessage};
        const newState = { ...currentState, [fieldName]: fieldValue, validations: newValidations };
        setNewState(newState);
    }

    //method to validate integer form fields
    const validateIntegerField = (field) =>{
        if(field!="" && field<=0){
            return validationMessage.lessThanZero
        }
        return undefined;
    }

    //method to validate plant difficulty level
    const validateDifficultyLevel=(difficultyLevel)=>{
        const valid=["Easy","Medium","Hard",""];
        if(valid.includes(difficultyLevel)){
            return undefined;
        }
        return validationMessage.invalidValue;
    }

    //method to validate plant type
    const validatePlantType=(plantType)=>{
        const valid=["Herb", "Shrub", "Ferns", "Fruit", "Climbers",""]
        if(valid.includes(plantType)){
            return undefined;
        }
        return validationMessage.invalidValue;
    }

    //method to validate plant common name
    const validateName=(name)=>{
        if(name!="" & name.length<3){
            return validationMessage.invalidNameLength;
        }
        return undefined;
    }

    return (
        <div>
            <h3>Add Plant</h3>
            <div className="mt-5">
                <form onSubmit={submitHandler}>
                <div className="form-group">
                        <label>Enter plant common name: </label>
                        <input 
                            type="text" 
                            name="commonName" 
                            ref={commonNameRef} 
                            onChange={() => changeHandler(commonNameRef)} 
                            required = {true} 
                            className="form-control" 
                        />
                        {currentState.validations.commonName?(
                            <div className={commonStyle.error}>
                                {currentState.validations.commonName}
                            </div>
                        ):''}
                    </div>
                    <div className="form-group">
                        <label>Enter plant height in centimeter: </label>
                        <input 
                            type="number"
                            name="plantHeight"
                            ref={plantHeightRef} 
                            onChange={() => changeHandler(plantHeightRef)}
                            required = {true} 
                            className="form-control" 
                        />
                        {currentState.validations.plantHeight?(
                            <div className={commonStyle.error}>
                               {currentState.validations.plantHeight} 
                            </div>
                        ):''}

                    </div>
                    <div className="form-group">
                        <label>Enter plant spread in centimeter: </label>
                        <input 
                            type="number" 
                            name="plantSpread"
                            ref={plantSpreadRef} 
                            onChange={() => changeHandler(plantSpreadRef)} 
                            required = {true} 
                            className="form-control" 
                        />
                        {currentState.validations.plantSpread?(
                            <div className={commonStyle.error}>
                               {currentState.validations.plantSpread} 
                            </div>
                        ):''}
                    </div>
                    <div className="form-group">
                        <label>Enter bloom time in weeks: </label>
                        <input 
                            type="number" 
                            name="bloomTime" 
                            ref={bloomTimeRef}
                            onChange={() => changeHandler(bloomTimeRef)} 
                            required = {true} 
                            className="form-control" 
                        />
                        {currentState.validations.bloomTime?(
                            <div className={commonStyle.error}>
                               {currentState.validations.bloomTime} 
                            </div>
                        ):''}
                    </div>
                    <div className="form-group">
                        <label>Enter medicinal or culinary use if any: </label>
                        <input 
                            type="text" 
                            name="plantUse" 
                            ref={plantUseRef} 
                            onChange={() => changeHandler(plantUseRef)} 
                            required = {true} 
                            className="form-control" 
                        />
                    </div>
                    <div className="form-group">
                        <label>Enter difficulty level: </label>
                        <input 
                            type="text" 
                            name="difficultyLevel" 
                            ref={difficultyLevelRef} 
                            onChange={() => changeHandler(difficultyLevelRef)} 
                            required = {true} 
                            className="form-control" 
                            list="difficultyList"
                            autoComplete="off"
                        />
                        <datalist id="difficultyList">
                            <option value="Easy" />
                            <option value="Medium" />
                            <option value="Hard" />
                        </datalist>
                        {currentState.validations.difficultyLevel?(
                            <div className={commonStyle.error}>
                               {currentState.validations.difficultyLevel} 
                            </div>
                        ):''}
                    </div>
                    <div className="form-group">
                        <label>Enter temperature in degrees: </label>
                        <input 
                            type="number" 
                            name="temperature" 
                            ref={temperatureRef} 
                            onChange={() => changeHandler(temperatureRef)} 
                            required = {true} 
                            className="form-control" 
                        />
                        {currentState.validations.temperature?(
                            <div className={commonStyle.error}>
                               {currentState.validations.temperature} 
                            </div>
                        ):''}
                    </div>
                    <div className="form-group">
                        <label>Enter type of plant: </label>
                        <input 
                            type="text" 
                            name="typeOfPlant" 
                            ref={typeOfPlantRef} 
                            onChange={() => changeHandler(typeOfPlantRef)} 
                            required = {true} 
                            className="form-control" 
                            list="plantTypeList"
                            autoComplete="off"
                        />
                        <datalist id="plantTypeList">
                            <option value="Herb" />
                            <option value="Shrub" />
                            <option value="Ferns" />
                            <option value="Fruit" />
                            <option value="Climbers" />
                        </datalist>
                        {currentState.validations.typeOfPlant?(
                            <div className={commonStyle.error}>
                               {currentState.validations.typeOfPlant} 
                            </div>
                        ):''}
                    </div>
                    <div className="form-group">
                        <label>Enter description: </label>
                        <input 
                            type="text" 
                            name="plantDescription" 
                            ref={plantDescriptionRef} 
                            onChange={() => changeHandler(plantDescriptionRef)} 
                            required = {true} 
                            className="form-control" 
                        />
                    </div>
                    <div className="form-group">
                        <label>Enter plant stock: </label>
                        <input 
                            type="number" 
                            name="plantStock" 
                            ref={plantStockRef} 
                            onChange={() => changeHandler(plantStockRef)} 
                            required = {true} 
                            className="form-control" 
                        />
                        {currentState.validations.plantStock?(
                            <div className={commonStyle.error}>
                               {currentState.validations.plantStock} 
                            </div>
                        ):''}
                    </div>
                    <div className="form-group">
                        <label>Enter plant cost: </label>
                        <input 
                            type="number" 
                            name="plantCost" 
                            ref={plantCostRef} 
                            onChange={() => changeHandler(plantCostRef)} 
                            required = {true} 
                            className="form-control" 
                        />
                        {currentState.validations.plantCost?(
                            <div className={commonStyle.error}>
                               {currentState.validations.plantCost} 
                            </div>
                        ):''}
                    </div>
                    <button className="btn btn-primary">Add Plant</button>
                </form>
            </div>
            <div className="mt-5 mb-5">
            {response.plant ? (
                <div>
                    <div className="alert alert-success">
                        Plant added successfully!
                    </div>
                    <div>
                        <DisplayPlant plant={response.plant} />
                    </div>
                </div>
            ) : ''}

            {response.errMsg ? (
                <div className="alert alert-danger">
                    Request cannot be processed! 
                    <br/>
                    Error: {response.errMsg}
                </div>
            ) : ''}
            </div>

        </div >
    );
}