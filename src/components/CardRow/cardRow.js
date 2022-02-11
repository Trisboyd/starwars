import { CardTableRow, CardTableCellBold, CardTableCell } from "./styledCardRow"

const CardRow = (props) => {

    return (
        <CardTableRow>
            <CardTableCellBold>{props.title}</CardTableCellBold>
            <CardTableCell>{props.info}</CardTableCell>
        </CardTableRow>
    )
}

export default CardRow;