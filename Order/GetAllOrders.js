import { useEffect, useState } from 'react';

import { getAllOrder } from "../../service/OrderService";

import commonStyle from './commonStyle.module.css';
import DisplayOrderList from "./DisplayOrderList";


    export default function GetAllOrders() {

        const [currentState, setNewState] = useState({ orders: undefined, errMsg: undefined });

        const fetchAllOrders = () => {
            console.log("inside use state function")
            const promise = getAllOrder();
            promise.then(
                response => setNewState({ orders: response.data, errMsg: undefined })
            ).
                catch(
                    error => setNewState({ orders: undefined, errMsg: error.message })
                )
        };
    
        /**
         * use effect gets execute when component is mounted and also when component is updated
         * in this demo we don't want it to execute when component is updated because in usestate we are changing the state
         *  that means component has got updated and so usestate will get execute again , this will become an infinite cycle
         * to break this cycle, empty array is passed, now useeffect will be executed only when component is mounted
         *  and not when it is updated
         */
        useEffect(fetchAllOrders, []);
    
        console.log("inside getall Orders", currentState.orders);
    
        return (
            <div>
    
                <h1>Get All Orders</h1>
    
                <div className={commonStyle.content}>
                    <ul >
    
                        {currentState.orders ? (
    
                            <DisplayOrderList orders={currentState.orders} />
    
                        ) : ''}
    
    
    
                    </ul>
    
                </div>
                { currentState.errMsg ? (
    
                    <div className={commonStyle.error}>
                        Error in request processing
                        <br />
                        {currentState.errMsg}
                    </div>
                ) : ''}
    
    
            </div>
    
        )
    
    }