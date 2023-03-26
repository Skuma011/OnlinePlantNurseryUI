import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSeedsStockAction } from "../../redux/getSeedToUpdate/updateSeedsStockActions";
import commonStyle from "./commonStyle.module.css";
import validationMessage from "./validationMessage";

/**
 * Component to update seeds stock
 */
export default function UpdateSeedsStock() {
  const stockRef = React.createRef();

  const response = useSelector((state) => {
    return {
      seed: state.updateSeedsStock.seed,
      errMsg: state.updateSeedsStock.error,
    };
  });

  const initialState = {
    seedsStock: undefined,
    updated: undefined,
    validations: { seedsStock: undefined },
  };

  const [currentState, setNewState] = useState(initialState);

  const dispatch = useDispatch();
  /**
   * submitHandler
   */
  const submitHandler = (event) => {
    event.preventDefault();
    if (currentState.validations.seedsStock) {
      return;
    }
    let data = {
      seedId: response.seed.seedId,
      seedsStock: currentState.seedsStock,
    };

    dispatch(updateSeedsStockAction(data));
    setNewState({ ...currentState, updated: true });
    stockRef.current.value = "";
  };

  /**
   * changeHandler to set seeds stock
   */
  const changeHandler = () => {
    const fieldValue = stockRef.current.value;
    let validationMessage = validateStock(fieldValue);
    const newValidations = { seedsStock: validationMessage };
    const newState = { seedsStock: fieldValue, validations: newValidations };
    setNewState(newState);
  };

  /**
   * Validating seeds stock
   * seeds stock cannot be less than zero
   */
  const validateStock = (seedsStock) => {
    if (seedsStock <= 0) {
      return validationMessage.seedsStockLessThanZero;
    }
    return undefined;
  };

  return (
    <div>
      <div className="mt-5 mb-5">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Enter updated seeds Stock:</label>
            <input
              name="seedsStock"
              type="number"
              ref={stockRef}
              onChange={changeHandler}
              required={true}
              className="form-control"
            />
            {currentState.validations.seedsStock ? (
              <div className={commonStyle.error}>
                {currentState.validations.seedsStock}
              </div>
            ) : (
              ""
            )}
          </div>
          <button className="btn btn-primary">Update Stock</button>
        </form>
        {currentState.updated ? (
          <div className="alert alert-success mt-3">
            Seed stock updated successfully!
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
