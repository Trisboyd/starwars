import styled from 'styled-components';

export const CardTableRow = styled.tr`
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