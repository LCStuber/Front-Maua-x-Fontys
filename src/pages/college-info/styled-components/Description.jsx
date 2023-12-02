import styled from 'styled-components';

const Header2 = styled.h1`
    font-family: Sansita-Black;
    margin-bottom: 10px;
    text-align: center;
    color: black;
    font-size: 38px ;
    
`;
const Header = styled.h1`
    font-family: Sansita-Black;
    margin-bottom: 10px;
    text-align: center;
    color: #f6f6f6;
    font-size: 38px ;
`;

const Description = styled.div`
    text-align: justify;
    padding: 0 10px;
    margin-bottom: 10px;
    font-size: auto;
    line-height: 1.5rem;
    color: #f6f6f6;
`;

const Description2 = styled.div`
    text-align: justify;
    padding: 0 10px;
    margin-bottom: 10px;
    font-size: auto;
    line-height: 1.5rem;
    color: black;
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: min(100%, 600px);
    height: 100%;
    margin: auto;
`;

const ContainerWhite = styled.div`
    bakcground-color: #ffffff;
    width: 100%;
`;

const ContainerInclined = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: min(100%, 600px);
    height: 100%;
    margin: 0 auto;
    transform: skewX(-7.5deg);
    transform-origin: bottom left;
`;



export {Description, Container, ContainerWhite, ContainerInclined, Header, Header2, Description2}