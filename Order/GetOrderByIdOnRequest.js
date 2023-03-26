import React, { useState } from 'react'
import DisplayOrder from './DisplayOrder';
import commonStyle from './commonStyle.module.css';
import { getOrderById } from '../../service/OrderService';

export default function GetOrderByIdOnRequest() {
    /*
    let mockCustomer={
        id:10,
        name: 'shiv',
        age:21,
        address: 'chennai'
      };
      */

    const bookingOrderIdRef = React.createRef();

    const intitalState = { bookingOrderId: undefined, order: undefined, errMsg: undefined };

    const [currentState, setNewState] = useState(intitalState);


    const submitHandler = (event) => {
        event.preventDefault();
        console.log("current state", currentState);
        const promise = getOrderById(currentState.bookingOrderId);
        const successFun = (response) => {
            const newState = { ...currentState, order: response.data };
            setNewState(newState);
        };
        const errFun = (error) => {
            const newState = { ...currentState, errMsg: error.message };
            setNewState(newState);
        };

        promise.then(successFun).catch(errFun);

    }

    const setFieldState = () => {
        const idValue = bookingOrderIdRef.current.value;
        const newState = { ...currentState, bookingOrderId: idValue, order: undefined, errMsg: undefined };
        setNewState(newState);
    }

    return (
        <div>
            <h1> Get order details on request</h1>

            <div className={commonStyle.content}>
                <form onSubmit={submitHandler} className={commonStyle.content}>

                    <div className="form-group">
                        <label>Enter Order ID:</label>

                        <input name="bookingOrderID" type="number" ref={bookingOrderIdRef} onChange={setFieldState} className="form-control" />

                    </div>

                    <button className="btn btn-primary">Get Order</button>

                </form>

                {currentState.order ? (
                    <div>
                        <DisplayOrder order={currentState.order} />
                    </div>
                ) : ''}


                {
                    currentState.errMsg ? (

                        <div className={commonStyle.error}>
                            Request processing unsuccessful
                            <br />
                            {currentState.errMsg}

                        </div>
                    ) : ''

                }
            </div>
        </div>

    );

}