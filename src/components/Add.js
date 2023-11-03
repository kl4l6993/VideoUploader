import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal' ;
import uniqid from 'uniqid';
import { addVideo } from '../services/allapis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Add({update}) {


    const addHandle=async ()=>{

        //id creation
        let id=uniqid();
        //storing that ID on to input state as object
        setInputs({...inputs,["id"]:id})

        //checking whether all field have content
        let {caption,cover_image,video_url}=inputs;

        if(caption=="" || cover_image=="" || video_url=="")
        {
            toast.error("All Inputs are required", {
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
        else
        {
        //calling addVideo API call function and storing the output of API call (response) onto a variable called results
        const results= await addVideo(inputs);
        console.log(results);

        if (results.status>=200 && results.status<=300)
        {
            update(results.data);
            toast.success("Video Added Successfully", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            setShow(false);
        }


        }
        
    }



    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //creation of State to store data from forms.

    const [inputs,setInputs]=useState({
        id:"",
        caption:"",
        cover_image:"",
        video_url:""
    })

    const setValues=(e)=>{
        let {value,name}=e.target;
        setInputs({...inputs,[name]:value})
       
    }

    const extractUrl=(e)=>{

        let videoUrl=e.target.value;
        if(videoUrl.includes("v="))
        {
            let subUrl=videoUrl.split("v=")[1]
            let finalUrl=`https://www.youtube.com/embed/${subUrl}?autoplay=1`
            setInputs({...inputs,["video_url"]:finalUrl})

        }
        

    }

    // console.log(inputs);


    return (

        <div>
            <div style={{display:'flex',justifyContent:'center'}}>
                <i onClick={handleShow} className="fa-solid fa-square-plus fa-beat-fade" style={{ color: 'black', fontSize: '50px' }}></i>

            </div>

            <br /><br />

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title style={{fontFamily:'Metal Mania',fontSize:'35px'}}>Upload Video</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label>Video Caption</Form.Label>
                            <Form.Control
                                onChange={(e)=>setValues(e)}
                                name='caption'
                                type="text"
                                placeholder="Enter video caption"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label>Video Cover Image URL</Form.Label>
                            <Form.Control
                                onChange={(e)=>setValues(e)}
                                name='cover_image'
                                type="text"
                                placeholder="Enter URL"
                                autoFocus
                            />
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="exampleForm.ControlInput1">
                            <Form.Label>Youtube Video URL</Form.Label>
                            <Form.Control
                                onChange={(e)=>extractUrl(e)}
                                type="text"
                                placeholder="Enter URL"
                                autoFocus
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addHandle}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

            <ToastContainer /> 
        </div>
    )
}

export default Add