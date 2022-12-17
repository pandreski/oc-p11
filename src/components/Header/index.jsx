import { NavLink } from 'react-router-dom';
import DefaultLogo from '../../assets/images/logo.svg';
import './_style.scss';

export default function Header() {
  return (
    <header>
      <img className="headerLogo" src={DefaultLogo} alt="Logo Kasa" />
      <nav>
        <ul>
          <li><NavLink className="headerNavLink" to="/">Accueil</NavLink></li>
          <li><NavLink className="headerNavLink" to="/a-propos">A Propos</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
