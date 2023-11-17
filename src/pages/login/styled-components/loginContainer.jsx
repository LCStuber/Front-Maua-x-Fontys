import styled from 'styled-components';

const Container = styled.div`
@media (max-aspect-ratio: 1/1) and (orientation: portrait){
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    width: 100vw;  
 }
@media (orientation: landscape) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: fit-content;
    width: 230px;
    padding: 20px;
    background-color: #004785;
    border-radius: 12px;
    box-shadow: 0 3px 6px #000000;
    aspect-ratio: 2/3;
    z-index: 1;
}
`
const LogoPrint = styled.img`
@media (max-aspect-ratio: 1/1) and (orientation: portrait){
    display: block;
    margin-top: 10vh;
    height: 20vh;
    filter: drop-shadow(0 0 10px 0 black);
    z-index: 1;
}

@media screen and (orientation: landscape) {
    display: inline-block;
    width: 180px;
    filter: drop-shadow(0 0 10px 0 black);
    margin-bottom: 20%;
    z-index: 1;
}
`
const LoginButton = styled.a`
@media (max-aspect-ratio: 1/1) and (orientation: portrait){
    display: block;
    text-align: center;
    width: 50%;
    margin-left: 25%;
    margin-right: 25%;
    height: fit-content;
    padding: 15px 35px;
    color: #FFFFFF;
    text-decoration: none;
    margin-top: 55vh;
    background: #002B50;
    box-shadow: inset 32px 59px 41px -71px #336C9D;
    border-radius: 12px;
    z-index: 1;
}
@media (orientation: landscape) {
    display: block;
    text-align: center;
    width: 150px;
    height: fit-content;
    padding: 10px 30px;
    color: #FFFFFF;
    text-decoration: none;
    background: #002B50;
    box-shadow: inset 32px 59px 41px -71px #336C9D;
    border-radius: 12px;
    z-index: 1;
}
`

const LogoMS365 = styled.img`
@media (max-aspect-ratio: 1/1) and (orientation: portrait){
    height: 20px;
    display: inline;
}
@media (orientation: landscape) {
    height: 20px;
    display: inline;
}
`


const Text = styled.p`
@media (max-aspect-ratio: 1/1) and (orientation: portrait){
    display: inline;
    padding-right: 15px;
    font-size: 20px;
}
@media (orientation: landscape) {
    display: inline;
    padding-right: 15px;
    font-size: 20px;
}
`

export { Container, LogoPrint, LoginButton, LogoMS365, Text };