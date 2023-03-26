import fetchPlanterByIdConstants from "./fetchPlanterByIdConstants";

const initialState={
    progress:false,
    planter:undefined,
    error:''
}

 function  fetchPlanterByIdReducer(state =initialState, action){

  if(action.type===fetchPlanterByIdConstants.fetchByIdRequest ||
     action.type===fetchPlanterByIdConstants.fetchByIdSuccess ||
     action.type===fetchPlanterByIdConstants.fetchByIdFail
    ){
        let newState={...state, ...action};
        return newState;
    }

    return state ;

}

export default fetchPlanterByIdReducer;