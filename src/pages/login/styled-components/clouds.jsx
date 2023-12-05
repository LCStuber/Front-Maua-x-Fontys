import styled from 'styled-components';

const Shape1 = styled.div`
@media screen and (max-aspect-ratio: 1/1) and (orientation: portrait){
    position: absolute;
    width: 60vw;
    height: 60vw;
    bottom: 0;
    background-color: #F2F6F9;
    clip-path: circle(50% at 50% 50%);
}
@media (orientation:landscape){
    position: absolute;
    justify-self: center;
    align-self: center;
    margin-left: 250px;
    width: 320px;
    height: 320px;
    background-color: #F2F6F9;
    clip-path: circle(50% at 50% 50%);
}
`;

const Shape2 = styled.div`
@media screen and (max-aspect-ratio: 1/1) and (orientation: portrait){
    position: absolute;
    width: 45vw;
    height: 45vw;
    left: 0;
    bottom: 5vh;
    background-color: #F2F6F9;
    clip-path: circle(65.5% at 59% 84%);
    z-index: 1;
}
@media (orientation:landscape){
    position: absolute;
    justify-self: center;
    align-self: center;
    margin-left: 210px;
    margin-top: 230px;
    width: 210px;
    height: 210px;
    background-color: #F2F6F9;
    clip-path: circle(50% at 50% 50%);
}
`;

const Shape3 = styled.div`
@media screen and (max-aspect-ratio: 1/1) and (orientation: portrait){
    position: absolute;
    left: 50vw;
    width: 50vw;
    height: 50vw;
    bottom: 5vh;
    background-color: #F2F6F9;
    clip-path: circle(65.5% at 43% 88%);
}
@media (orientation:landscape){
    position: absolute;
    justify-self: center;
    align-self: center;
    margin-left: 230px;
    margin-bottom: 230px;
    width: 250px;
    height: 250px;
    background-color: #F2F6F9;
    clip-path: circle(50% at 50% 50%);
}
`;

const Shape4 = styled.div`
@media screen and (max-aspect-ratio: 1/1) and (orientation: portrait){
    position: absolute;
    top: 90%;
    width: 100vw;
    height: 20%;
    background-color: #F2F6F9;
}
`;

const Shadow1 = styled.div`
@media screen and (max-aspect-ratio: 1/1) and (orientation: portrait){
    position: absolute;
    left: 15vw;
    width: 50vw;
    height: 50vw;
    bottom: 10vh;
    background-color: #B8CCDD;
    clip-path: circle(50% at 50% 50%);
}
@media (orientation:landscape){
    position: absolute;
    justify-self: center;
    align-self: center;
    margin-top: 50px;
    margin-right: 250px;
    width: 280px;
    height: 280px;
    background-color: #B8CCDD;
    clip-path: circle(50% at 50% 50%);
}
`;

const Shadow2 = styled.div`
@media screen and (max-aspect-ratio: 1/1) and (orientation: portrait){
    position: absolute;
    width: 45vw;
    height: 45vw;
    left: 0;
    bottom: 10vh;
    background-color: #B8CCDD;
    clip-path: circle(64.9% at 58% 85%);
}
@media (orientation:landscape){
    position: absolute;
    justify-self: center;
    align-self: center;
    margin-right: 80px;
    margin-top: 200px;
    width: 250px;
    height: 250px;
    background-color: #B8CCDD;
    clip-path: circle(50% at 50% 50%);
}
`;

const Shadow3 = styled.div`
@media screen and (max-aspect-ratio: 1/1) and (orientation: portrait){
    position: absolute;
    right: 0;
    width: 60vw;
    height: 60vw;
    bottom: 11vh;
    background-color: #B8CCDD;
    clip-path: circle(65.5% at 41% 91%);
}
@media (orientation:landscape){
    position: absolute;
    justify-self: center;
    align-self: center;
    margin-right: 130px;
    margin-bottom: 230px;
    width: 210px;
    height: 210px;
    background-color: #B8CCDD;
    clip-path: circle(50% at 50% 50%);
}
`;

const SubShadow1 = styled.div`
@media screen and (max-aspect-ratio: 1/1) and (orientation: portrait){
    position: absolute;
    left: 20vw;
    width: 60vw;
    height: 60vw;
    bottom: 10vh;
    background-color: #628DB4;
    clip-path: circle(50% at 50% 50%);
}
@media (orientation:landscape){
    position: absolute;
    justify-self: center;
    align-self: center;
    margin-bottom: 260px;
    width: 250px;
    height: 250px;
    background-color: #628DB4;
    clip-path: circle(50% at 50% 50%);
}
`;

const SubShadow2 = styled.div`
@media screen and (max-aspect-ratio: 1/1) and (orientation: portrait){
    position: absolute;
    width: 45vw;
    height: 45vw;
    left: 0;
    bottom: 15vh;
    background-color: #628DB4;
    clip-path: circle(70.6% at 66% 81%);
}
@media (orientation:landscape){
    position: absolute;
    justify-self: center;
    align-self: center;
    margin-top: 280px;
    margin-left: 30px;
    width: 250px;
    height: 250px;
    background-color: #628DB4;
    clip-path: circle(50% at 50% 50%);
}
`;

const SubShadow3 = styled.div`
@media screen and (max-aspect-ratio: 1/1) and (orientation: portrait){
    position: absolute;
    right: 0;
    width: 50vw;
    height: 50vw;
    bottom: 15vh;
    background-color: #628DB4;
    clip-path: circle(65.2% at 44% 82%);
}
`;

export { Shape1, Shape2, Shape3, Shape4, Shadow1, Shadow2, Shadow3, SubShadow1, SubShadow2, SubShadow3 };