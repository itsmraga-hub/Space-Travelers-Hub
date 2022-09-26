import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => (
    <nav>
      <div className='logo-container'>
        <img src="/images/planet.png" className="logo" alt="logo" />
        <Link to="/" className="brand-logo">Space Travelers' Hub</Link>
      </div>
      <ul>
        <li><Link to='/rockets'>Rockets</Link></li>
        <li><Link to="/missions">Missions</Link></li>
        <li><Link to="/profile">My Profile</Link></li>
      </ul>
    </nav>
  );


export default Header;
