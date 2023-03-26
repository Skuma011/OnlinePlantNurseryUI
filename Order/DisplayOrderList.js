
import { Link } from 'react-router-dom';

export default function DisplayOrderList({ orders }) {

    console.log("inside Display order lsit", orders);
    return (
        <div>

            <ul className="list-group">

                {
                    orders.map((order) => <li className="list-group-item" key={order.bookingOrderId}>

                       <Link to={`/getorderbyid/${order.bookingOrderId}`} >
                       <span>
                            Booking Order ID : {order.bookingOrderId} - Order Date : {order.orderDate}
                       </span>
                       
                       </Link>

                    </li>)
                }
            </ul>


        </div>

    )

}