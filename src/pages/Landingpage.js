import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Landingpage() {
    return (


        <div className='ms-1 p-5'>
        <Container>
                <Row className='m-3 p-1 mb-5'>
                    <Col lg={6} md={6} sm={12} className='text-center'>
                        {/* <h2 className='mt-5 mb-5' style={{ fontFamily: 'Dancing Script', fontSize: '60px' }}><span style={{ color: 'red' }}>V</span>ideo <span style={{ color: 'red' }}>U</span>ploader</h2> */}
                        <h1 className='mt-5 mb-5' style={{ fontFamily: 'Nosifer,sans-serif', color: 'blue',textAlign:'center'}}>A better way to upload video!</h1>
                        <p style={{ fontFamily: 'Kalam', fontSize: '18px' }}>Solve the hassle of video delivery by packing transcoding, storage, security, and video player into a powerful but straightforward package. Stream anywhere. Without buffering !!</p><br />
                        <Link to={'/home'}>
                        <Button style={{textAlign:'center',alignItems:'center',width:'65%',height:'12%',borderRadius:'30px'}} variant="info">Get Started  <i className="fa-solid fa-eject fa-rotate-90 fa-md"></i></Button>
                        </Link>
                    </Col>
                    <Col lg={6} md={6} sm={12} style={{ marginTop: '50px', textAlign: 'left' }}>
                        <img className='mt-1 me-4' style={{ width: '100%', height: '100%' }} src="https://i.postimg.cc/8k2szPRW/uploading.gif" alt="" />
                    </Col>
                </Row>
    
        </Container>
        <br /><hr /><br />

        
            
            
            
            {/* CARDS SECTION */}
                
                <div style={{ backgroundColor: 'wheat',borderRadius:'10px'}} className='mt-5'>
                <h1 className='text-center' style={{ fontFamily: 'Creepster', fontSize: '50px',paddingTop:'35px'}}>FEATURES</h1>
                    <Container>
                    <Row className='mt-5' style={{display:'flex',justifyContent:'space-evenly'}}>
                        
                                <Col lg={4} md={4} sm={12} style={{marginBottom:'30px'}}className='p-4'>
                                    <Card style={{ width: '100%',borderRadius:'20px'}}>
                                        <Card.Img style={{width:'100%',height:'220px'}}variant="top" src="https://i.postimg.cc/v8h81cqx/e6c0aaaeacb3c1272f28e1494f140a45.gif" />
                                        <Card.Body>
                                            <Card.Title style={{fontSize:'22px',fontWeight:'bold'}}>Managing Videos</Card.Title>
                                            <Card.Text style={{fontSize:'15px',textAlign:'justify'}}>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Col> 
                                
                                <Col lg={4} md={4} sm={12} style={{marginBottom:'30px'}} className='p-4'>
                                <Card style={{ width:'100%',borderRadius:'20px' }}>
                                        <Card.Img style={{width:'100%',height:'220px'}}variant="top" src="https://i.postimg.cc/1504ss2J/autoplaying-gifs.gif"/>
                                        <Card.Body>
                                            <Card.Title className='text-center' style={{fontSize:'22px',fontWeight:'bold'}}>Categorise Videos</Card.Title>
                                            <Card.Text style={{fontSize:'15px',textAlign:'justify'}}>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Col> 
                                <Col lg={4} md={4} sm={12} style={{marginBottom:'30px'}} className='p-4'>
                                <Card style={{ width: '100%',borderRadius:'20px' }}>
                                        <Card.Img style={{width:'100%',height:'220px'}}variant="top" src="https://i.postimg.cc/VLTmCNpY/watch.gif" />
                                        <Card.Body>
                                            <Card.Title className='text-center' style={{fontSize:'22px',fontWeight:'bold'}}>Watch History</Card.Title>
                                            <Card.Text style={{fontSize:'15px',textAlign:'justify'}}>
                                                Some quick example text to build on the card title and make up the
                                                bulk of the card's content.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    </Col>
        
                                </Row>    
    
                                </Container>
                                </div>
    
</div>    )
}

export default Landingpage