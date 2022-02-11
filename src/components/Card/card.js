import CardRow from "../CardRow/cardRow";
import { CardContainer, CardInfo, CardTable, CardTableBody, CardTitle } from "./styledCard"


const Card = (props) => {

    return (
        <>
            {props.character &&
                <CardContainer>
                    <CardInfo>
                        <CardTitle>{props.character.name}</CardTitle>
                        <CardTable>
                            <CardTableBody>
                                <CardRow title={'Height'} info={`${props.character.height}cm`} />
                                <CardRow title={'Hair Color'} info={`${props.character.mass}kg`} />
                                <CardRow title={'DOB'} info={props.character.birth_year} />
                                {props.species &&
                                    <CardRow title={'Species'} info={props.species} />
                                }
                                <CardRow title={'Films'} info={props.films} />
                                {props.ships.length > 0 &&
                                    <CardRow title={'Starhips Flown'} info={props.ships} />
                                }
                            </CardTableBody>
                        </CardTable>
                    </CardInfo>
                </CardContainer>
            }
        </>
    )
}

export default Card;