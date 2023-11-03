import React, { useEffect, useState } from 'react'
import Videocard from './Videocard'
import { getAllVideos } from '../services/allapis'
import { Col, Container, Row } from 'react-bootstrap'



function View({updatedState}) {

const [allVideos,setallVideos]=useState([])

//for Deleting videos creating state

const [deleteUpdate,setdeleteUpdate] =useState({});

const accessAllVideos=async()=>{
  const result= await getAllVideos();
  if(result.status>=200 && result.status<300)
  {
    setallVideos(result.data)
    console.log(result.data);
  }
}

useEffect(()=>{
  accessAllVideos()
},[updatedState,deleteUpdate])


  return (
    <Container>
      <Row>
        {
          allVideos.length>0?allVideos.map(i=>
            <Col lg={6} md={6} sm={12}><Videocard deleteFunc={setdeleteUpdate} video={i}></Videocard></Col>
            ):<h1>No Videos Available</h1>
        }
      </Row>
  
    </Container>  )
}

export default View