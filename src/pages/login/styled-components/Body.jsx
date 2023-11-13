import style from 'styled-components';

const Body = style.div`
display: flex;
justify-content: center;
align-items: center;
background-color: #014785;
font-family: Arial, sans-serif;
text-align: center;
color: #FFFFFF;
height: 100vh;
width: 100vw;
z-index: 0;
`;

const Container = style.div`
display: flex;
justify-content: center;
align-items: center;
width: 100vw;
height: 100vh;
fit-content;
`

export { Body, Container }