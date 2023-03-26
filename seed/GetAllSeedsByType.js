import React, { useState } from "react";
import DisplaySeedList from "./DisplaySeedList";
import commonStyle from "./commonStyle.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSeedsByType } from "../../redux/fetchallseedsbytype/fetchAllSeedsByTypeAction";

/**
 * Component to get all seeds by its type
 */
export default function GetAllSeedsByType() {
  const typeOfSeedsRef = React.createRef();

  const [state, setNewState] = useState({ typeOfSeeds: undefined });

  const response = useSelector((state) => {
    return {
      seeds: state.fetchAllSeedsByType.seeds,
      error: state.fetchAllSeedsByType.error,
    };
  });
  const dispatch = useDispatch();

  /**
   * change handler to set type of seeds
   *
   */
  const changeHandler = () => {
    console.log("Inside Change Handler");
    const fieldVal = typeOfSeedsRef.current.value;
    const newState = { typeOfSeeds: fieldVal };
    setNewState(newState);
  };

  /**
   * Submit Handler
   *
   */
  const submitHandler = (event) => {
    event.preventDefault();
    console.log("Inside Submit Handler");
    const typeOfSeeds = state.typeOfSeeds;

    dispatch(fetchAllSeedsByType(typeOfSeeds));
  };

  return (
    <div className="mt-5 md-5">
      <h3>Get Seeds By Type</h3>
      <div className="mt-5">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <label>Enter type of seeds:</label>
            <input
              type="text"
              name="typeOfSeeds"
              onChange={changeHandler}
              ref={typeOfSeedsRef}
              className="form-control"
              required="true"
              list="seedType"
              autoComplete="off"
            />
          </div>
          <datalist id="seedType">
            <option value="monocotyledonous" />
            <option value="dicotyledonous" />
          </datalist>
          <button className="btn btn-primary">Get Seeds</button>
        </form>
      </div>
      <div className="mt-5 md-5">
        <div>
          <ul>
            {response.seeds ? <DisplaySeedList seeds={response.seeds} /> : ""}
          </ul>
        </div>
        {response.error ? (
          <div className={commonStyle.error}>
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
