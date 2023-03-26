import { Link } from "react-router-dom";
import commonStyle from './commonStyle.module.css';

export default function customerHome(){
    return(
        <div>
           <div> <h1 style={{color:'rgb(0, 129, 90)'}}>Customer Module</h1></div>
            <div>
                <ul className="list-group mt-5" style={{width:'50%', fontSize:'17px'}}>
                    <li className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
                        <Link to="/login">
                            Login
                        </Link>
                        <span> - Enter login credentials of a user</span>
                    </li>
                    <li className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
                        <Link to="/addcustomer">
                            Add Customer
                        </Link>
                        <span> - Register a user in the database</span>
                    </li>
                    <li className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
                    <Link to="/getallcustomers">
                        Get All Customers
                    </Link>
                    <span> - Fetch all customers from database</span>
                    </li>
                    <li className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
                    <Link to="/getcustomerdetailsonrequest">
                        Get Customer Details By Id
                    </Link>
                    <span> - Fetch customer details by customer ID</span>
                    </li>
                    <li className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
                    <Link to="/changecustomername">
                        Change Customer Name
                    </Link>
                    <span> - Update customer name in the database</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}