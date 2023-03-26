import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllPlantsAction } from '../../redux/getAllPlants/getAllPlantsActions';
import DisplayPlantList from "./DisplayPlantList";

export default function GetAllPlants() {

    // response object for holding global state data
    const response = useSelector(state=>{
        return(
            {
                plants: state.getAllPlants.plants, 
                errMsg: state.getAllPlants.error
            }
        );
    })

    // useDispatch hook is used to dispatch actions
    const dispatch = useDispatch();

    // method to dispatch action
    const getAllPlants =()=>{
        dispatch(getAllPlantsAction());
    };

    // useEffeect hook is used ro call getAllPlants() when the component is rendered
    useEffect(getAllPlants, []);

    return (
        <div>
            <h3>Get All Plants</h3>
            <div className="mt-5">
                <div>
                    <ul>
                        {response.plants ? (
                            <div>
                                <div className="alert alert-success">
                                    All Plants fetched successfully!
                                </div>
                                <div>
                                    <DisplayPlantList plants={response.plants} />
                                </div>
                            
                            </div>
                        ) : ''}
                    </ul>
                </div>
                {response.errMsg ? (
                    <div className="alert alert-danger">
                        Request cannot be successfull!
                        <br />
                        Error: {response.errMsg}
                    </div>
                ) : ''}
            </div>
        </div>
    );
}