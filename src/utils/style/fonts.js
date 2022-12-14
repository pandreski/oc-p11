import { createGlobalStyle } from 'styled-components';
import MontserratBold from '../../assets/fonts/Montserrat-Bold.ttf';
import MontserratMedium from '../../assets/fonts/Montserrat-Medium.ttf';
import MontserratRegular from '../../assets/fonts/Montserrat-Regular.ttf';

const FontStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratRegular}) format('truetype');
    font-weight: 400;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratMedium}) format('truetype');
    font-weight: normal;
  }
  @font-face {
    font-family: 'Montserrat';
    src: url(${MontserratBold}) format('truetype');
    font-weight: bold;
  }
`;

export default FontStyles;
