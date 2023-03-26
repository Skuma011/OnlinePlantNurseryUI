import { Link } from "react-router-dom";
/**
 * Displaying all the seed details
 */
export default function DisplaySeedList({ seeds }) {
  return (
    <div>
      <ul className="list-group">
        {seeds.map((seed) => (
          <li key={seed.seedId} className="list-group-item">
            <Link to={`/seedbyid/${seed.seedId}`}>
              <span>
                {seed.seedId} {seed.commonName}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
