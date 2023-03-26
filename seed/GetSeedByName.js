import React, { useState } from "react";
import DisplaySeedDetails from "./DisplaySeedDetails";
import { useDispatch, useSelector } from "react-redux";
import commonStyle from "./commonStyle.module.css";
import validationMessage from "./validationMessage";
import { fetchSeedByCommonName } from "../../redux/fetchseedbyname/fetchSeedByNameAction";

/**
 * Component to get seed details by its common name on request
 *
 */
export default function GetSeedByName() {
  const nameRef = React.createRef();

  const response = useSelector((state) => {
    return {
      seed: state.fetchSeedByCommonName.seed,
      error: state.fetchSeedByCommonName.error,
    };
  });

  const dispatch = useDispatch();

  const initialState = {
    commonName: undefined,
    validations: { commonName: undefined },
  };

  const [currentState, setNewState] = useState(initialState);

  /**
   * Submit handler
   */
  const submitHandler = (event) => {
    event.preventDefault();
    if (currentState.validations.commonName) {
      return;
    }
    dispatch(fetchSeedByCommonName(currentState.commonName));
  };
  /**
   * Change handler to set name
   */
  const changeHandler = () => {
    const fieldValue = nameRef.current.value;
    let validationMessage = validateName(fieldValue);

    const newValidations = { commonName: validationMessage };
    const newState = { commonName: fieldValue, validations: newValidations };
    setNewState(newState);
  };
  /**
   *  Validating common name length
   */
  const validateName = (commonName) => {
    if (commonName.length < 3) {
      return validationMessage.commonNameNotFound;
    }
    return undefined;
  };

  return (
    <div className="mt-5 mb-5">
      <h3> Get seed details on Request</h3>
      <div>
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Enter seed name to get details: </label>
            <input
              type="text"
              name="commonName"
              ref={nameRef}
              onChange={changeHandler}
              required="true"
              className="form-control"
            />
            {currentState.validations.commonName ? (
              <div className={commonStyle.error}>
                {currentState.validations.commonName}
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
            <h3> Seed details are fetched successfully</h3>
            <DisplaySeedDetails seed={response.seed} />
          </div>
        ) : (
          ""
        )}
        {response.error ? (
          <div className={commonStyle.error}>
            Request is not processing
            <br />
            {response.error}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
