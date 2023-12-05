import style from 'styled-components';

const Body = style.body`
@media (orientation:landscape){
    display: flex;
    justify-content: center;
    align-items: center;
}
background-color: #014785;
font-family: Arial, sans-serif;
text-align: center;
color: #FFFFFF;
height: 
width: 100vw;
z-index: 0;
@media screen and (max-aspect-ratio: 1/1) and (orientation: portrait){
    background-color: #FFFFFF;
}
`;

const Container = style.div`
width: 100vw;
height: 100%;
@media (orientation:landscape){
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}
`

export { Body, Container }