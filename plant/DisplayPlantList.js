import { Link } from 'react-router-dom';

export default function DisplayPlantList({plants}) {
    
    return(
        <div>
            <ul className="list-group">
                {
                    plants.map(plant=><li key={plant.commonName} className="list-group-item">
                        <Link to={`/plantbyname/${plant.commonName}`}>
                            <span>{plant.commonName} - {plant.plantDescription}</span>
                        </Link>
                    </li>)
                }
            </ul>
        </div>
    );
}