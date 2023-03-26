import  React,{ useState } from "react";
import DisplayCustomer from "./DisplayCustomer";
import validationMessage from '../../validationMessage';
import commonStyle from "./commonStyle.module.css";
import {addCustomerAction} from "../../redux/addCustomer/addCustomerAction";
import {useDispatch,useSelector} from "react-redux";


export default function  AddCustomer(){

// Refs for fetching value from form fields
const    customerNameref = React.createRef();     
const   customerEmailref = React.createRef();     
const   userNameref = React.createRef();     
const   passwordref = React.createRef();     
const   houseNoref = React.createRef();
const   colonyref = React.createRef();     
const   cityref = React.createRef();     
const    stateref = React.createRef();     
const    pincoderef = React.createRef();

// Initial state object specific to this component
const initialState = {
    customerNameref: undefined,
    customerEmailref: undefined,
    userNameref : undefined,
    passwordref : undefined,
    houseNoref: undefined,
    colonyref: undefined,
    cityref: undefined,
    stateref : undefined,
    pincoderef: undefined,
    formstatus : "",
    validations: { customerName: undefined, pincode: undefined },
    
};

// response object for holding global state data
const response = useSelector(state=>{ 
  return (
      {
          customer: state.addCustomer.customer,
          errMsg: state.addCustomer.error
      }
  );
});

// useState hook for managing state specific to the component
const [state, setNewState] = useState(initialState);

// useDispatch hook is used to dispatch actions
const dispatch = useDispatch();

/* 
  submitHandler is called when form is submitted.
  It checks if there is any validation error and if not, 
  then dispatches the action to update global state.
*/
const submitHandler = (event) => {
  event.preventDefault();
  if(
    state.validations.customerName ||
    state.validations.pincode
  ) {
    return;
  }
  let data = {...state};
  dispatch(addCustomerAction(data));
};

/*
  It is called whenever an input field is changed.
  It takes the input field values and updates the
  local state accordingly.
*/
const changeHandler = (ref) => {
    const field = ref.current;
    const fieldName = field.name;
    const fieldValue = field.value;
    let validationMsg;
    if (ref === customerNameref) {
      validationMsg = validateCustomerName(fieldValue);
    }

    if (ref === pincoderef) {
      validationMsg = validatePincode(fieldValue);
    }

    const newValidations = { ...state.validations, [fieldName]: validationMsg };
    const newState = {
      ...state,
      [fieldName]: fieldValue,
      customer: undefined,
      errMsg: undefined,
      validations: newValidations
    };

    setNewState(newState);
   
  };

 //method to validate customer name
  const validateCustomerName = (customerName) => {
    if (customerName.length < 1) {
      return validationMessage.invalidName;
    }
    return undefined;
  }

  //method to validate pincode
  const validatePincode = (pincode) => {
    if (pincode.length < 6) {
      return validationMessage.invalidPincode;
    }
    return undefined;
  }
   
  return(
    <div>
      <h3> Add Customer</h3>
      <br/>
    <form onSubmit = {(event) => submitHandler(event)}>
    <div className="form-group">
    <label>Name</label>
    <input name="customerName" type = "text" ref={customerNameref} onChange={()=> changeHandler(customerNameref) }className="form-control" />
    
    {state.validations.customerName ? (
      <div className={commonStyle.error}>
        {state.validations.customerName} 
      </div>
    ) : (
      ""
    )}
  </div>

   
    <div className="form-group">
    <label>Email</label>
    <input name="customerEmail" type = "email" ref={customerEmailref} onChange={()=> changeHandler(customerEmailref) }className="form-control" />
    </div>

    <div className="form-group">
    <label>Username</label>
    <input name="username" type = "text" ref={userNameref} onChange={()=> changeHandler(userNameref) }className="form-control" />
    </div>

    <div className="form-group">
    <label>Password</label>
    <input name="password" type = "password" ref={passwordref} onChange={()=> changeHandler(passwordref) }className="form-control" />
    </div>

    <div className="form-group">
    <label>House No.</label>
    <input name="houseNo" type = "number"  ref={houseNoref} onChange={()=> changeHandler(houseNoref) }className="form-control" /><br/>
    </div>

    <div className="form-group">
    <label>Colony</label>
    <input name="colony" type = "text" ref={colonyref} onChange={()=> changeHandler(colonyref) }className="form-control" /><br/>
    </div>

    <div className="form-group">
    <label>City</label>
    <input name="city" type = "text" ref={cityref} onChange={()=> changeHandler(cityref) }className="form-control" /><br/>
    </div>

    <div className="form-group">
    <label>State</label>
    <input name="state" type = "text" ref={stateref} onChange={()=> changeHandler(stateref) }className="form-control" /><br/>
    </div>

    <div className="form-group">
    <label>Pincode</label>
    <input name="pincode" type = "number" ref={pincoderef} onChange={()=> changeHandler(pincoderef) }className="form-control" /><br/>
     
    {state.validations.pincode ? (
      <div className={commonStyle.error}>
        {state.validations.pincode} 
      </div>
    ) : (
      ""
    )}
  </div>

    <br/>

    <button className= "btn btn-primary" >AddCustomers</button>
 </form>
 <h2>{state.formstatus}</h2><br/>
 

 <br />
 {response.customer ? (
   <div>
     <h3>Customer Added Successfully</h3>
     <br/>
     <h3>Details: <br/></h3>
     <DisplayCustomer customer={ response.customer} />
   </div>
 ) : (
   ""
 )}
 {response.errMsg ? (
   <div>
     <h3> Customer not Added Successfully</h3>
     <br />
     {response.errMsg}
   </div>
 ) : (
   ""
 )}
    </div>
  )
}