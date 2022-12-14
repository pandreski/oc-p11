import {
  Link, Outlet, Route, Routes,
} from 'react-router-dom';
import styled from 'styled-components';
import About from './About';
import Home from './Home';
import DefaultLogo from '../assets/images/logo.svg';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="a-propos" element={<About />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav ul {
      list-style-type: none;
      display: flex;

      li {
        padding: 0 15px;
      }
    }
  `;

  const Logo = styled.img`
    width: 145px;
    height: auto;
  `;

  return (
    <>
      <Header>
        <Logo src={DefaultLogo} alt="Logo Kasa" />
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="/a-propos">A propos</Link></li>
          </ul>
        </nav>
      </Header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </>
  );
}
