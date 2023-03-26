import { Link } from "react-router-dom";
import commonStyle from './commonStyle.module.css';

export default function plantHome(){
    return(
        <div>
            <h1 style={{color:'rgb(0, 129, 90)'}}>Plant Module</h1>
            <ul className="list-group mt-5" style={{width:'50%', fontSize:'17px'}}>
                    <li className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
                        <Link to="/allplants">
                            Get All Plants
                        </Link>
                        <span> - Fetch all the plants from the database</span>
                    </li>
                    <li className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
                        <Link to="/addplant">
                            Add Plant 
                        </Link>
                        <span> - Add a plant to the database</span>
                    </li>
                    <li className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
                        <Link to="/plantbynameonrequest">
                            Get Plant By Name
                        </Link>
                        <span> - Get plant details from the database</span>
                    </li>
                    <li className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
                        <Link to="/plantsbytype">
                            Get Plants By Type
                        </Link>
                        <span> - Get all the plants of a type from the database</span>
                       
                    </li>
                    <li className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
                        <Link to="/planttoupdate">
                            Update Plant Stock
                        </Link>
                        <span> - Update the stock of a plant in the database</span>

                    </li>
                </ul>
        </div>
    );
}