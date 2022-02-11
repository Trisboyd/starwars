import { PreloaderImage, PreloaderMessage, PreloaderWrap } from './styledPreloader';

const Preloader = () => {

    return(
        <PreloaderWrap>
            <PreloaderImage />
            <PreloaderMessage>Searching for character...</PreloaderMessage>
        </PreloaderWrap>
    )
}

export default Preloader;