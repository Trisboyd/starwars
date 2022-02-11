import * as styled from 'styled-components';

import Roboto from '../../fonts/Roboto-Regular.ttf';
import RobotoBold from '../../fonts/Roboto-Bold.ttf';

import StarJedi from '../../fonts/Starjedi.ttf';
import StarFont from '../../fonts/Starjhol.ttf';

const FontStyles = styled.createGlobalStyle`
@font-face {
    font-family: 'Roboto';
    src: url(${Roboto}) format('truetype');
    font-weight: 400;
}

@font-face {
    font-family: 'Roboto';
    src: url(${RobotoBold}) format('truetype');
    font-weight: 700;
}

@font-face {
    font-family: 'StarJedi';
    src: url(${StarJedi}) format('truetype');
    font-weight: 400;
}

@font-face {
    font-family: 'StarFont';
    src: url(${StarFont}) format('truetype');
    font-weight: 400;
}
`
export default FontStyles;