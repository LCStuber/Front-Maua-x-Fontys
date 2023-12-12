import styled from 'styled-components';

const Image = styled.img`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    @media (min-width: 880px){
        height: min(85vh, 900px);
        object-fit: cover;
    }
`;

const ImageInclined = styled.img`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    @media (min-width: 880px){
        height: min(85vh, 900px);
        object-fit: cover;
        transform: skewX(7.5deg);
        transform-origin: bottom right;
    }
`;

const ImageInclined2 = styled.img`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    @media (min-width: 880px){
        height: min(85vh, 900px);
        object-fit: cover;
        transform: skewX(7.5deg);
        transform-origin: top right;
    }
`;





export {Image, ImageInclined, ImageInclined2}