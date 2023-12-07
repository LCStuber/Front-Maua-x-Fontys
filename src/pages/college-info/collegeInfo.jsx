import React from 'react';
import Row1 from './components/row1';
import Row2 from './components/row2';
import Row3 from './components/row3';
import Row4 from './components/row4';
import Row5 from './components/row5';
import Row6 from './components/row6';
import Row7 from './components/row7';

export default function CollegeInfo() {
  return(
    <>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Sansita:wght@700&display=swap');
        </style>
        <Row1/>
        <Row2/>
        <Row3/>
        <Row4/>
        <Row5/>
        <Row6/>
        <Row7/>
    </>
  );
}