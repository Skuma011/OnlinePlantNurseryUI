import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import commonStyle from "./commonStyle.module.css";
import validationMessage from "./validationMessage";
import UpdateSeedsStock from "./UpdateSeedsStock";
import { getSeedsStockAction } from "../../redux/getSeedToUpdate/updateSeedsStockActions";

/**
 * get seed current name and stock to update
 */
export default function GetSeedToUpdate() {
  const nameRef = React.createRef();

  const response = useSelector((state) => {
    return {
      seed: state.updateSeedsStock.seed,
      errMsg: state.updateSeedsStock.error,
    };
  });

  const dispatch = useDispatch();

  const initialState = { name: undefined, validations: { name: undefined } };

  const [currentState, setNewState] = useState(initialState);

  /**
   * submitHandler
   */
  const submitHandler = (event) => {
    event.preventDefault();
    if (currentState.validations.name) {
      return;
    }
    dispatch(getSeedsStockAction(currentState.name));
  };
  /**
   * changeHandler
   */
  const changeHandler = () => {
    const fieldValue = nameRef.current.value;
    let validationMessage = validateName(fieldValue);

    const newValidations = { name: validationMessage };
    const newState = { name: fieldValue, validations: newValidations };
    setNewState(newState);
  };

  const validateName = (name) => {
    if (name.length < 3) {
      return validationMessage.InvalidNameLength;
    }
    return undefined;
  };
  return (
    <div>
      <h3>Update Seeds Stock</h3>
      <div>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Enter seed name to update: </label>
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
            ) : (
              ""
            )}
          </div>
          <button className="btn btn-primary">Get Seed</button>
        </form>
      </div>

      <div className="mt-5 md-5">
        {response.seed ? (
          <div>
            <h3> Current stock is fetched</h3>
            Common Name is {response.seed.commonName}
            <br />
            Seeds Stock is {response.seed.seedsStock}
            <div>
              <UpdateSeedsStock />
            </div>
          </div>
        ) : (
          ""
        )}
        {response.errMsg ? (
          <div className="alert alert-danger">
            Request cannot be processed!
            <br />
            {response.errMsg}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
