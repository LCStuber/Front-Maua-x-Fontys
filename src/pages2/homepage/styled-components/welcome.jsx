import styled from 'styled-components';

const Welcome = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 12px;
    padding-left: 16px;
    font-size: 90%;
    font-weight: bold;
    background-color: #002B50;
    color: #f6f6f6;
    border-radius: 0 0 90% 70%;
    position: relative;
`;  

const DateContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: inline-block;
    padding: 8px 8px;
    font-size: 90%;
    font-weight: 400;
    background-color: #336C9D;
    color: #f6f6f6;
    border-radius: 0 0 0 10px;
`;

const Image = styled.img`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    z-index: -1;
    margin-top: -30px;
`;


export {Welcome, DateContainer, Image};