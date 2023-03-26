import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">
          Online Plant Nursery
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/planterhome" className="nav-link">
                <span>Planter Module</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/plantHome" className="nav-link">
                <span>Plant Module</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/seedHome" className="nav-link">
                <span>Seed Module</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/customerhome" className="nav-link">
                <span>Customer Module</span>
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/orderhome" className="nav-link">
                <span>Order Module</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
