import { CardContainer, CardInfo, CardTable, CardTableBody, CardTableCell, CardTableCellBold, CardTableRow, CardTitle } from "./styledCard"


const Card = (props) => {

    return (
        <>
            {props.character &&
                <CardContainer>
                    <CardInfo>
                        <CardTitle>{props.character.name}</CardTitle>
                        <CardTable>
                            <CardTableBody>
                                <CardTableRow>
                                    <CardTableCellBold>Height</CardTableCellBold>
                                    <CardTableCell>{props.character.height}cm</CardTableCell>
                                </CardTableRow>
                                <CardTableRow>
                                    <CardTableCellBold>Weight</CardTableCellBold>
                                    <CardTableCell>{props.character.mass}kgs</CardTableCell>
                                </CardTableRow>
                                <CardTableRow>
                                    <CardTableCellBold>Hair Color</CardTableCellBold>
                                    <CardTableCell>{props.character.hair_color}</CardTableCell>
                                </CardTableRow>
                                <CardTableRow>
                                    <CardTableCellBold>DOB</CardTableCellBold>
                                    <CardTableCell>{props.character.birth_year}</CardTableCell>
                                </CardTableRow>
                                <CardTableRow>
                                    <CardTableCellBold>Species</CardTableCellBold>
                                    <CardTableCell>{props.species}</CardTableCell>
                                </CardTableRow>
                                <CardTableRow>
                                    <CardTableCellBold>Films</CardTableCellBold>
                                    <CardTableCell>{props.films}</CardTableCell>
                                </CardTableRow>
                                <CardTableRow>
                                    <CardTableCellBold>Starships Flown</CardTableCellBold>
                                    <CardTableCell>{props.ships}</CardTableCell>
                                </CardTableRow>
                            </CardTableBody>
                        </CardTable>
                    </CardInfo>
                </CardContainer>
            }
        </>
    )
}

export default Card;