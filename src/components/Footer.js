import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <div className='p-5 ms-3 me-3'>
        <Row>
            <hr />
             <Col lg={4} md={4} sm={12} xs={12}>
                <img
                alt=""
                src="https://i.postimg.cc/CxHYXMpt/play-button-icon-png-18909.png"
                width="25"
                height="25"
                className="d-inline-block align-top me-1"
                />
                <b className='fs-6'><span style={{color:'red'}}>V</span>ideo <span style={{color:'red'}}>U</span>ploader</b>
                <div style={{fontSize:'smaller',textAlign:'justify'}} className='mt-2 p-2'>
                We are on a mission to help build and accelerate the internet of tomorrow. We obsess about customer experience and strive towards constant innovation, with a goal of helping companies and developers build a faster, safer, and more reliable internet.
                </div> <br />
                </Col>

                <Col lg={2} md={2} sm={12} xs={12}>
                <b><span style={{color:'red'}}>L</span>inks</b>
                    <div className='mt-3'>
                        <a href="" style={{textDecoration:'none', color:'red',fontSize:'smaller'}}>Landing Page</a><br />
                        <a href="" style={{textDecoration:'none', color:'red',fontSize:'smaller'}}>Home</a> <br />
                        <a href="" style={{textDecoration:'none', color:'red',fontSize:'smaller'}}>Watch History</a><br />
                    </div> <br />

                </Col><br />

                <Col lg={2} md={2} sm={12} xs={12}>
                 <b><span className='text-primary'>G</span>uides</b>
                 <div style={{fontSize:'smaller'}} className='mt-3'>
                    <div className='mt-3 '>React</div>
                    <div className='mt-1 '>React Bootstrap</div>
                    <div className='mt-1 '>Routing</div>
                </div> <br />
                </Col>

                <Col lg={4} md={4} sm={12} xs={12}>
                    <b><span className='text-primary'>C</span>ontact <span className='text-primary'>U</span>s</b>
                    <div>
                    <InputGroup className="mt-4 mb-3" style={{width:'100%',height:'5px'}}>
                    <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                    <Form.Control
                        placeholder="Username"
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                    />
                    </InputGroup> <br />
                    <Button variant="outline-info" style={{width:'100%',height:'35px', fontSize:'smaller'}}>Send</Button>{' '}
                    </div>
                </Col>
    
        </Row> <br />
        <hr />
    </div>
  )
}

export default Footer