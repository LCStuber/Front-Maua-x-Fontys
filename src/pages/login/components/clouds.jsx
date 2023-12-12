import React from "react";
import { Shape1, Shape2, Shape3, Shape4, Shadow1, Shadow2, Shadow3, SubShadow1, SubShadow2, SubShadow3 } from '../styled-components/clouds.jsx';


export default function Clouds() {
    return(
        <>
            <SubShadow1></SubShadow1>
            <SubShadow2></SubShadow2>
            <SubShadow3></SubShadow3>
            <Shadow1></Shadow1>
            <Shadow2></Shadow2>
            <Shadow3></Shadow3>
            <Shape1></Shape1>
            <Shape2></Shape2>
            <Shape3></Shape3>
            <Shape4></Shape4>
        </>
    )
}