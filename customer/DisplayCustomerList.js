import { Link } from "react-router-dom";

export default function DisplayCustomerList({customers}) {
    return (
        <div>
        <ul className="list-group">
        {
            customers.map(customer=>
                <li key={customer.customerId} className="list-group-item">
                    <Link to ={`/getcustomerbyid/${customer.customerId}`}>
                        <span>
                            {customer.customerId} : {customer.customerName}
                        </span>
                    </Link>

                </li>
            )}
        
        
        </ul>
        </div>
    );
}