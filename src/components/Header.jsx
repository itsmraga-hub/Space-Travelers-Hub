import './css/Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <div className="logo-container">
        <img src="/images/planet.png" className="logo" alt="logo" />
        <Link to="/" className="brand-logo">Space Travelers&apos; Hub</Link>
      </div>
      <ul className="nav-link-container">
        <li className="nav-link"><NavLink to="/rockets" className="link" activeclassname="active">Rockets</NavLink></li>
        <li className="nav-link"><NavLink to="/missions" className="link" activeclassname="active">Missions</NavLink></li>
        <li className="nav-link"><NavLink to="/my-profile" className="link" activeclassname="active">My Profile</NavLink></li>
      </ul>
    </nav>
  </header>
);

export default Header;
