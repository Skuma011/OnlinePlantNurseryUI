import { Link } from "react-router-dom";
import commonStyle from './commonStyle.module.css';

export default function orderHome(){
    return(
        <div>
            <h1 style={{color:'rgb(0, 129, 90)'}}>Order Module</h1>
            <ul className="list-group mt-5" style={{width:'50%', fontSize:'17px'}}>
                    <li  className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
                        <Link to="/allorders" >
                            Get All order
                        </Link>
                        <span> - Fetch all orders from database</span>
                    </li>
                    <li  className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
                        <Link to="/addorder">
                            Add Order
                        </Link>
                        <span> - Add a new order to database</span>
                    </li>
                    <li  className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
                        <Link to="/getorderbyidonrequest">
                            Get Order By Id
                        </Link>
                        <span> - Fetch a particular order by ID</span>
                    </li>
                    
                </ul>
        </div>
    );
}