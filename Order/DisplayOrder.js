
export default function DisplayOrder({ order }) {
    let { bookingOrderId, transactionMode, quantity,totalCost,orderDate} = order;
    console.log(order);
    
    return (
        <div>
            
            bookingOrderId is {bookingOrderId}
            <br />
    transactionMode is {transactionMode}
            <br />
    quantity is {quantity}
            
            <br />
    totalCost is {totalCost}
            <br />
            orderDate is {orderDate}
            <br/>
            
          

            
            
 
        </div>
    );
    


}