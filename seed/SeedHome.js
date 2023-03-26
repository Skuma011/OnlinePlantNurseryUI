import { Link } from "react-router-dom";
import commonStyle from './commonStyle.module.css';

export default function SeedHome(){
    return(
        <div>
            <h1 style={{color:'rgb(0, 129, 90)'}}>Seed Module</h1>
            <div>
            <ul className="list-group mt-5" style={{width:'50%', fontSize:'17px'}}>
          <li className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
              <Link to="/addseed">
                Add Seed
              </Link>
              <span> - Add a seed to the database</span>
            </li>

            <li className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
              <Link to="/seedbyname">
                Get Seed By name
              </Link>
              <span> - Fetch a seed by name from the database</span>
            </li>

            <li className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
              <Link to="/allseeds">
                Get All Seeds
              </Link>
              <span> - Fetch all seeds from the database</span>
            </li>

            <li className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
              <Link to="/seedsbytype">
                Get Seeds By Type
              </Link>
              <span> - Fetch seeds of a particular type</span>
            </li>

            <li className={`list-group-item mb-4 border-0 ${commonStyle.listStyle}`}>
            <Link to="/seedtoupdate">
              Update Seeds Stock
            </Link>
            <span> - update seed stock in database</span>
          </li>

          </ul>
        </div>
        </div>

  );
}
