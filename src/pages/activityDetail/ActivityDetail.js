import React from 'react';
import './ActivityDetail.css';
import { useParams } from 'react-router-dom';

const ActivityDetail = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <div style={{color: "red"}}>ActivityDetail</div>
  )
}

export default ActivityDetail