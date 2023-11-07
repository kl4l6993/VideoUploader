import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Add from '../components/Add'
import View from '../components/View'
import Categories from '../components/Categories'
import { Link } from 'react-router-dom'



function Home() {

    //state for state lifting - add & view component.
    const [addUpdate,setaddUpdate]=useState({});
    
  return (
    <div className='ms-5 me-5 p-2 mt-5'>
        <Container>
        <Row>
            <Col lg={6} md={6} sm={12}>
                <h1 className='ps-2 mt-5 ms-2'style={{fontFamily: 'Metal Mania'}}><span style={{color:'red'}}>S</span>tart <span style={{color:'red'}}>U</span>ploading <span style={{color:'red'}}>V</span>ideos <span style={{color:'red'}}>F</span>or <span style={{color:'red'}}>F</span>ree..</h1>
                <div className='mt-5 ps-3 ms-2'>
                 <Link to={'/watch-history'} style={{textDecoration:'none'}}><a style={{fontSize:'20px',fontFamily:'Satisfy',color:'blue'}}>View Watch History <i class="fa-regular fa-clock fa-spin"></i></a></Link>
                <p style={{textDecoration:'none',fontSize:'20px',fontFamily:'Satisfy',color:'black',marginTop:'30px',textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit dolorem quam ipsam. Sapiente, impedit harum, delectus sit amet deserunt inventore beatae dolorum omnis velit dolorem placeat! Tenetur dolores libero minus?</p>
                </div>
    
            </Col>
            <Col lg={6} md={6} sm={12} className='mt-5'style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
            <img className='text-center'style={{width:'350px',height:'350px'}}src="https://i.postimg.cc/htxzrbvv/pngegg-5.png" alt="" />
            </Col>       
        
        </Row>        
    
        </Container> <br />
        <br /> <hr /><br /><br />
        

        <Container>
            <Row>
                <Col lg={1} md={1} sm={12}>
                <Add update={setaddUpdate}></Add>
                <br />
                </Col>
                
                <Col lg={7} md={7} sm={12}>
                <View updatedState={addUpdate}></View>
                <br />
                </Col>

                <Col lg={4} md={4} sm={12}>
                <Categories></Categories>
                </Col>
            </Row>
    
        </Container>
    </div>
  )
}

export default Home