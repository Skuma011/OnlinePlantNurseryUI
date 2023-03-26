import React, { useState } from "react";
import DisplayOrder from "./DisplayOrder";
import commonStyle from './commonStyle.module.css';
import validationMessage from './validationMessage';
import { addOrder } from "../../service/OrderService";



export default function AddOrder() {
 /* const order = {
    transactionMode: "Square",
    quantity: 10,
    planterId: 1
    
  };*/


  
  const transactionModeRef = React.createRef();
  const quantityRef = React.createRef();

  const  planterIdRef= React.createRef();
  
  const initialState = {
    transactionMode: undefined,
    quantity: undefined,
   errMsg: undefined,
    planterId: undefined,
    order : undefined,
    validations: {
        
      transactionMode: undefined,
      
     
      planterId: undefined}
  };
  const [currentState, setNewState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    if (currentState.validations.transactionMode || currentState.validations.planterId) {
      return;
    }

    let data = { ...currentState };
    const promise = addOrder(data);
    promise
      .then((response) =>
        setNewState({ ...currentState, order: response.data })
      )
      .catch((error) =>
        setNewState({ ...currentState, errMsg: error.message })
      );
  };

  const setFieldState = (ref) => {
    const fieldName = ref.current.name;
    const fieldValue = ref.current.value;
    let validationMsg;
    if (ref === transactionModeRef) {
      validationMsg = validateTransactionMode(fieldValue);
    }

    if (ref === planterIdRef) {
      validationMsg = validatePlanterId(fieldValue);
    }

    const newValidations = { ...currentState.validations, [fieldName]: validationMsg };
    const newState = {
      ...currentState,
      [fieldName]: fieldValue,
      order: undefined,
     
      validations: newValidations
    };

    setNewState(newState);
   
  };


/**
 *  validating name is atleast 2 letters long
 */
  const validateTransactionMode = (transactionMode) => {
    if (transactionMode.length < 2) {
      return validationMessage.SmallthanLengthTwo;
    }
    return undefined;
  }



  /**
   * validating age is +ve
   */
  const validatePlanterId = (planterId) => {
    if (planterId < 0) {
      return validationMessage.planterIdSmallThanZero;
    }

    

    return undefined;
  };

  return (
    <div>
      <h1>Add Order </h1>

      <form onSubmit={submitHandler} className={commonStyle.content}>
        <div className="form-group">
          <label>Enter transactionMode</label>
          <input
            name="transactionMode"
            type="text"
            ref={transactionModeRef}
            onChange={() => setFieldState(transactionModeRef)}
            className="form-control"
            required
          />

          {currentState.validations.transactionMode ? (
            <div className={commonStyle.error}>
              {currentState.validations.transactionMode}
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="form-group">
          <label>Enter planterId</label>
          <input
            name="planterId"
            type="number"
            ref={planterIdRef}
            onChange={() => setFieldState(planterIdRef)}
            className="form-control"
            required
          />
          {currentState.validations.planterId ? (
            <div className={commonStyle.error}>
              <span>{currentState.validations.planterId} </span>
            </div>
          ) : (
            ""
          )}
        </div>

        <div className="form-group">
          <label>Enter quantity</label>
          <input
            name="quantity"
            type="number"
            ref={quantityRef}
            onChange={() => setFieldState(quantityRef)}
            className="form-control"
            required
          />
        </div>

        <button className="btn btn-primary">Add Order </button>
      </form>

      {currentState.order ? (
        <div>
          <h3>Order Added</h3>
          <DisplayOrder order={currentState.order} />
        </div>
      ) : (
        ""
      )}

      {currentState.errMsg ? (
        <div className={commonStyle.error}>
          Request proccessing was not successful
          <br />
          {currentState.errMsg}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}