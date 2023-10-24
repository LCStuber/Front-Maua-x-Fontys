import styled from "styled-components";



const Activities = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 120%;
    width: 90%;
    margin: auto;
    margin-top: 20px;
    background-color: #001C35;
    text-align: center;
    color: #f6f6f6;
    padding: 10px 0;
    border-radius: 5px;
    box-shadow: 0 0 4px #001C35;
`;

const Header = styled.h3`
    color: #f6f6f6;
    font-weight: normal;
    margin-left: 10px;
`;

const Card = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    margin: auto;
    width: 90%;
    background-color: #014785;
    box-shadow: 4px 4px 4px 1px #001C35;
    margin-bottom: 20px;
    border-radius: 5px;
    padding: 2%; 
    position: relative;
    &:hover{
        background-color: #001C35;
        border-radius: 5px;
        box-shadow: 0 0 4px #001C35;  
    }
`;

const CardText = styled.div`
    margin: 0;
    font-size: 180%;
    color: #f6f6f6;
    padding: 15px 0 15px 0;
    margin-left: 30px;
`;

const Anchor = styled.a`
    text-decoration: none;
    color: #f6f6f6;
`;

const Group = styled.div`
    font-size: 65%;
    @media (min-width: 880px){
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        margin: auto;
        margin-top: 20px;
        margin-bottom: 20px;
        position: relative;
    }
    @media (max-width: 880px) {
        flex-direction: column;
        align-items: center;
    }
`;


export {Activities, Header, Card, CardText, Anchor, Group}