import styled from 'styled-components';
import stormtroops from '../../images/stormtroops.jpg';

export const CardContainer = styled.article`
    width: 100vw;
    height: 40vw;
    display: flex;
    flex-direction: row;
    margin: auto;
    background: url(${stormtroops});
    background-size: cover;
    background-position: center;

    @media (max-width: 1024px) {
        height: 60vh;
    }
`
export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
`
export const CardTitle = styled.h2`
    font-family: 'StarFont', sans-serif;
    font-size: 30px;
    margin: 0 auto 20px;
    color: white;
`
export const CardTable = styled.table`
    width: 60vw;
    margin: 0 auto;
    background: black;
    opacity: .8;
`
export const CardTableBody = styled.tbody`
`