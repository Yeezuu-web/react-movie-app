import React from 'react';
import PropTypes from 'prop-types';
// Styles
import { Wrapper, Content, Text } from './HeroImage.styled';

const HeroImage = ({ image, title, text}) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

export default HeroImage;