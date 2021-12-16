import { MessageContainer, MessageImage, MessageText } from "./styledErrorResponse"
import image from '../../images/c3po.jpg';

const ErrorResponse = () => {

    return(
        <MessageContainer>
            <MessageImage src={image} />
            <MessageText>
                These are not the droids you are looking for. Try another search.
            </MessageText>
        </MessageContainer>
    )
}

export default ErrorResponse;