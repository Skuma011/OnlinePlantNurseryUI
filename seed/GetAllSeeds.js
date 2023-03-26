import DisplaySeedList from "./DisplaySeedList";
import commonStyle from "./commonStyle.module.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllSeeds } from "../../redux/fetchallseeds/fetchAllSeedsAction";

/**
 * component to get all seeds
 */
export default function GetAllSeeds() {
  const currentState = useSelector((state) => {
    return {
      seeds: state.fetchAllSeeds.seeds,
      error: state.fetchAllSeeds.error,
    };
  });

  const dispatch = useDispatch();
  const fetchAll = () => {
    console.log("inside use state function");
    dispatch(fetchAllSeeds());
  };

  useEffect(fetchAll, []);

  console.log("inside get all seeds");

  return (
    <div className="mt-5 mb-5">
      <h3>Get All Seeds</h3>
      <div className="mt-5">
        <div>
          <ul>
            {currentState.seeds ? (
              <DisplaySeedList seeds={currentState.seeds} />
            ) : (
              ""
            )}
          </ul>
        </div>
        {currentState.error ? (
          <div className={commonStyle.error}>
            Request cannot be successfull
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
