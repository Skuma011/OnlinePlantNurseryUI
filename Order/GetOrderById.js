import React, { useState , useEffect} from 'react'
import DisplayOrder from './DisplayOrder';
import commonStyle from './commonStyle.module.css';
import {getOrderById}  from '../../service/OrderService';

export default function GetOrderById(props) {

    const intitalState = { order:undefined, errMsg: undefined };

    const [currentState, setNewState] = useState(intitalState);

    const fetchOrderOnRender=()=>{
        const id=props.match.params.bookingorderid;// fetching id from parameter   
        const promise=  getOrderById(id);
        const successFun=(response)=>{
        const newState={...currentState, order:response.data, errMsg:undefined};
            setNewState(newState);
        };
         const errFun=(error)=>{
           const newState={...currentState, errMsg:error.message, order:undefined};
            setNewState(newState);
         };

         promise.then(successFun).catch(errFun);

    }

     useEffect(fetchOrderOnRender,[]);


    return (
        <div>
            {currentState.order ? (
                <div>
                    <h1> Get Order Details</h1>
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

    );

}