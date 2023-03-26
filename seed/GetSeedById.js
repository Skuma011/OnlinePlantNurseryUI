import React, { useEffect } from "react";
import DisplaySeedDetails from "./DisplaySeedDetails";
import { useDispatch, useSelector } from "react-redux";
import commonStyle from "./commonStyle.module.css";
import { fetchSeed } from "../../redux/fetchseedbyid/fetchSeedByIdAction";

/**
 * Get seed by seedId
 *
 */
export default function GetSeedById(props) {
  const currentState = useSelector((state) => {
    return {
      seed: state.fetchSeed.seed,
      error: state.fetchSeed.error,
    };
  });

  const dispatch = useDispatch();

  const fetchSeedOnRender = () => {
    const id = props.match.params.seedId;
    console.log("inside fetch seed by id", id);
    dispatch(fetchSeed(id));
  };
  useEffect(fetchSeedOnRender, []);

  return (
    <div>
      <h3> Get seed details</h3>
      <div className="mt-5">
        {currentState.seed ? (
          <div>
            <DisplaySeedDetails seed={currentState.seed} />
          </div>
        ) : (
          ""
        )}
        {currentState.error ? (
          <div className={commonStyle.error}>
            Request is not processing
            <br />
            {currentState.error}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
