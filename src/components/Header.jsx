import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <nav>
      <div className='logo-container'>
        <img src="/images/planet.png" className="logo" alt="logo" />
        <Link to="/" className="brand-logo">Space Travelers' Hub</Link>
      </div>
      <ul>
        <li><NavLink to="/rockets" className="link" activeClassName="active">Rockets</NavLink></li>
        <li><NavLink to="/missions" className="link" activeClassName="active">Missions</NavLink></li>
        <li><NavLink to="/my-profile" className="link" activeClassName="active">My Profile</NavLink></li>
      </ul>
    </nav>
  );


export default Header;
