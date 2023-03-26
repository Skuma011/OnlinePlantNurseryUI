import { Link } from 'react-router-dom';

export default function Navbar(){

   return(
      <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <Link to ="/" className="navbar-brand">
       Order Module
       </Link>
       
       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
       <span className="navbar-toggler-icon"></span>
   </button>
       
   <div className="collapse navbar-collapse" id="navbarSupportedContent">
   <ul className="navbar-nav mr-auto">
       
       <li className="nav-item">
           <Link to="/addorder" className="nav-link">
               Add Order
           </Link>
       </li>
       <li className="nav-item">
           <Link to="/all" className="nav-link">
               getallOrder
           </Link>
       </li>
       
       <li className="nav-item">
       <Link to="/getorderbyidonrequest" className="nav-link">
           GetOrderByIdRequest
       </Link>
       
   </li>
   </ul>
   </div>
       </nav>
      </div>

   ) ;

}