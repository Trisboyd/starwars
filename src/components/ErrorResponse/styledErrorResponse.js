import styled from 'styled-components';

export const MessageContainer = styled.section`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media (max-width: 525px) {
        flex-direction: column;
    }
`
export const MessageImage = styled.img`
    width: 40vw;
    height: 20vw;

    @media (max-width: 525px) {
        margin: auto;
        height: 30vw;
    }
`
export const MessageText = styled.h3`
    font-family: 'StarJedi', sans-serif;
    font-weight: 400;
    font-size: 30px;
    text-align: center;
    margin: auto;
    color: white;
`