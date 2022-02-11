import styled from 'styled-components';
import background from '../../images/tatooine-background.jpg';

export const HeroContainer = styled.section`
    width: 100vw;
    height: 50vw;
    background-size: cover;
    background-image: url(${background});
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const HeroTitle = styled.h1`
    font-family: 'StarJedi', sans-serif;
    font-weight: 400;
    font-size: 50px;
    line-height: 1.5;
    margin: 80px auto 0;
    opacity: .8;

    @media (max-width: 768px) {
        margin-top: 30px;
    }

    @media (max-width: 525px) {
        font-size: 30px;
    }

    @media (max-width: 400px) {
        font-size: 20px;
        margin-top: 5px;
    }
`
export const HeroSubtitle = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 15px;
    margin: 10px auto 0;
    color: white;

    @media (max-width: 525px) {
        font-size: 10px;
    }

    @media (max-width: 400px) {
        font-size: 8px;
    }
`

export const HeroInputWrapper = styled.form`
    width: 42vw;
    height: 64px;
    position: relative;
    margin: auto;

    @media (max-width: 768px) {
        width: 50vw;
        height: 50px;
    }

    @media (max-width: 525px) {
        width: 60vw;
        height: 40px;
    }

    @media (max-width: 400px) {
        width: 80vw;
        height: 25px;
    }
`

export const HeroInput = styled.input`
    width: 100%;
    height: 100%;
    background: #FFFFFF;
    border: 1px solid #D1D2D6;
    box-sizing: border-box;
    backdrop-filter: blur(8px);
    border-radius: 100px;
    margin: auto;
    padding-left: 24px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.37;
    color: #1A1B22;
    outline: none;
`

export const HeroButton = styled.button`
position: absolute;
width: 25%;
height: 100%;
top: 0;
right: 0;
margin: auto;
background: blue;
box-shadow: 0px 5px 15px rgba(14, 26, 57, 0.2);
border-radius: 100px;
font-family: 'Roboto', sans-serif;
font-weight: 500;
font-size: 18px;
line-height: 1.33;
display: flex;
justify-content: center;
align-items: center;
text-align: center;
color: white;
border: none;
outline: none;
transition: background .2s ease-in-out;

:hover {
background: ${props => props.hoverColor};
cursor: pointer;
}

@media (max-width: 400px) {
    font-size: 12px;
}
`