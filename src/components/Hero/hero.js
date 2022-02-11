import React from 'react';
import { HeroButton, HeroContainer, HeroInput, HeroInputWrapper, HeroSubtitle, HeroTitle } from './styledHero';

const Hero = (props) => {

    const [searchItem, setSearchItem] = React.useState('');

    // ___________________________________________________________________change inputs based on typing
    const handleChange = (event) => {
        setSearchItem(event.target.value);
    };

    const submitSearch = (event)=> {
        event.preventDefault();
        props.getCharacter(searchItem);
    }

    return (
        <HeroContainer>
            <HeroTitle>
                Star Wars Search
            </HeroTitle>
            <HeroSubtitle>
                Search any Star Wars character for detailed information
            </HeroSubtitle>
            <HeroInputWrapper>
                <HeroInput
                type='text'
                onChange={handleChange}
                />
                <HeroButton
                    type='submit'
                    onClick={submitSearch}
                >Search
                </HeroButton>
            </HeroInputWrapper>
        </HeroContainer>
    )
}

export default Hero;