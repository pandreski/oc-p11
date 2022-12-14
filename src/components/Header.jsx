import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import DefaultLogo from '../assets/images/logo.svg';
import colors from '../utils/style/colors';

const Logo = styled.img`
  width: 145px;
  height: auto;

  @media screen and (min-width: 992px) {
    width: 210px;
  }
`;

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;

  nav ul {
    list-style-type: none;
    display: flex;
    padding: 0;
    margin: 0;

    li + li {
      padding-left: 15px;

      @media screen and (min-width: 768px) {
        padding-left: 60px;
      }
    }
  }
`;

const MenuLink = styled(NavLink)`
  font-size: .75em;
  color: ${colors.primary};
  text-decoration: none;

  &.active {
    text-decoration: underline;
  }

  @media screen and (min-width: 768px) {
    font-size: 1.5em;
  }
`;

export default function Header() {
  return (
    <Wrapper>
      <Logo src={DefaultLogo} alt="Logo Kasa" />
      <nav>
        <ul>
          <li><MenuLink to="/">Accueil</MenuLink></li>
          <li><MenuLink to="/a-propos">A propos</MenuLink></li>
        </ul>
      </nav>
    </Wrapper>
  );
}
