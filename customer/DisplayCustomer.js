export default function DisplayCustomer({ customer }) {
  return (
    <div>
      <b>Customer Name : </b> {customer.customerName}
      <br />
      <b>Customer Email :</b> {customer.customerEmail}
      <br />
      <b>Customer Username :</b> {customer.username}
      <br />
     <b> Customer House No :</b> {customer.houseNo}
      <br />
      <b>Colony :</b> {customer.colony}
      <br />
      <b>City :</b> {customer.city}
      <br />
     <b> State : </b>{customer.state}
      <br />
     <b> Pincode :</b> {customer.pincode}
    </div>
  );
}
