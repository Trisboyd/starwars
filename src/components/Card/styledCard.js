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
export const CardTableRow = styled.tr`
`
export const CardTableBody = styled.tbody`
`
export const CardTableCellBold = styled.td`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 18px;
    font-weight: bold;
    border: 1px solid white;
    color: white;

    @media (max-width: 525px) {
        font-size: 12px;
    }
`
export const CardTableCell = styled.td`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 18px;
    border: 1px solid white;
    color: white;

    @media (max-width: 525px) {
        font-size: 12px;
    }
`