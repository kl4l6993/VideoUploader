import React, { useState } from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Footer() {

    const [enq,setEnq]=useState('');

    const footerm=(m)=>
    {
        setEnq(m.target.value);
    }

    const enquiry=()=>
    {
        if (enq == '' || !enq.includes('@')) {
            toast.error("Input is required", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
        else if (enq!='' && enq.includes('@'))
        {
            toast.success("Enquiry Sent Successfully", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });

        }
    }

  return (
    <div className='p-5 ms-5 me-5' id='footer'>
    <Container>
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
    
                    </Col>
    
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
                        <InputGroup className="mt-4 mb-3" style={{width:'90%',height:'5px'}}>
                        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                        <Form.Control
                            onChange={(m)=>footerm(m)}
                            placeholder="Username"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            name='name'
                        />
                        </InputGroup> <br />
                        <Button variant="outline-info" onClick={enquiry} style={{width:'90%',height:'35px', fontSize:'smaller'}}>Send Enquiry</Button>
                        </div>
                    </Col>
        
            </Row> <br />
    
</Container>        <hr />
<ToastContainer />
    </div>
  )
}

export default Footer