import Logo from '../../assets/images/logo-white.svg';
import './_style.scss';

export default function Footer() {
  return (
    <footer>
      <img src={Logo} alt="Logo Kasa" />
      <p>&copy; 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
