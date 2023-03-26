import React, { useEffect } from "react";
import DisplayPlant from "./DisplayPlant";
import { useDispatch, useSelector } from "react-redux";
import { getPlantByNameAction } from "../../redux/getPlantByName/getPlantByNameActions";

export default function GetPlantByName(props){

    // response object for holding global state data
    const response = useSelector(state=>{
        return(
            {
                plant: state.getPlantByName.plant, 
                errMsg: state.getPlantByName.error
            }
        );
    })

    // useDispatch hook is used to dispatch actions
    const dispatch = useDispatch();

    // method to dispatch action
    const getPlantByName=()=>{
        let name=props.match.params.name;
        dispatch(getPlantByNameAction(name));
    }

    // useEffeect hook is used ro call getPlantByName() when the component is rendered
    useEffect(getPlantByName, []);

    return(
        <div>
            <h3>Plant Details</h3>
            <div className="mt-5">
            {response.plant?(
                <div>
                    <div>
                        <div className="alert alert-success">
                            Plant details fetched successfully!
                        </div>
                        <div>
                            <DisplayPlant plant={response.plant}/>
                        </div>
                       
                    </div>
                </div>
            ):''}

            {response.errMsg?(
                <div className="alert alert-danger">
                    Request cannot be processed
                    <br/>
                    Error: {response.errMsg}
                </div>
            ):''}
            </div>
        </div>
    );
}