import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, delCategory,getAllCat, getsingleVideo, updateCategory } from '../services/allapis';
import { Trash2, Trash } from 'react-feather';
import Accordion from 'react-bootstrap/Accordion';
import { Link, useNavigate } from 'react-router-dom';


function Categories() {

    const [catInputs, setcatInputs] = useState({
        id: "",
        name: "",
        videos: []
    });

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const setInputs = (e) => {
        const { value, name } = e.target;
        setcatInputs({ ...catInputs, [name]: value });

    };

    //creating state for getting all categories

    const [categories, setCategories] = useState([])
    

    const addData = async () => {
        let id = uniqid()

        setcatInputs({ ...catInputs, ["id"]: id })

        const { name } = catInputs;

        if (name == "") {
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
        else {
            //api call

            const result = await addCategory(catInputs)
            if (result.status >= 200 && result.status < 300) {
                setShow(false)
                getAllCategories()
                toast.success(`${result.data.name} added Successfully`, {
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

    }

    //Getting all categories

   const getAllCategories = async () => {

        const result = await getAllCat()

        if (result.status >= 200 && result.status < 300) {
            setCategories(result.data);
        }
    }

    //Delete Category

    const deleteCat = async (id) => {

        const result = await delCategory(id);

        if (result.status >= 200 && result.status < 300) {
            //this is to refresh front end after deletion of category
            getAllCategories()
        }

    }


    useEffect(() => {

        getAllCategories();

    }, [])

    const dragOver = (e) => {
        //since this event is working continuously and to avoid refresh.
        e.preventDefault()
        console.log("dragged over the category...");
    }

    const dropped = async (e, id) => {
        console.log("dropped..cat Id -" + id)
        //video id access
        const videoID = e.dataTransfer.getData("cardID")


        //API Call to get single dragged video details from backend
        const { data } = await getsingleVideo(videoID)


        //Selected or Dropped category from all categories

        const selectedCategory = categories.find(i => i.id == id) //output of find is element ie here object

        //pushed the data elements to array.
        selectedCategory.videos.push(data)

        //API Call to paste this in categories.

        await updateCategory(id, selectedCategory);

        
        getAllCategories()
    }


        return (
        <div>
            <Button style={{ marginTop: '5px', width: '100%', borderRadius: '30px', height: '50px' }} variant="dark" onClick={handleShow}>
                Add Category
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add Categories</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
                            <Form.Label>Category Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter Category Name"
                                autoFocus
                                onChange={(e) => setInputs(e)}
                                name='name'
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={addData}>
                        Add
                    </Button>
                </Modal.Footer>
            </Modal>

            {
                categories.length > 0 ? categories.map(cat => (


                        <div droppable style={{border:'1px solid', borderRadius:'15px',backgroundColor:'lightgrey'}} className='mt-5 p-2' onDragOver={(e) => dragOver(e)} onDrop={(e) => dropped(e, cat?.id)}>
    

                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header style={{fontFamily:'Nosifer', textAlign: 'center'}}>{cat.name}</Accordion.Header>
                                        
                                        {
                                            cat.videos.map(j => (
                                        
                                        <Accordion.Body>
        
                                            <div className='mt-2' style={{display:'flex', justifyContent:'center'}}>
                                                <img src={j.cover_image} style={{width:'200px',height:'200px'}}></img>
                                            </div>
                                            
                                            <div className='mt-2' style={{display:'flex', justifyContent:'center'}}>
                                                <h4>{j.caption}</h4>
                                            </div>
                                            <hr/>
        
                                        </Accordion.Body>
                                        ))
        
                                            }
                                    </Accordion.Item>
                                    </Accordion>

                                   
  
                                <Trash2 style={{ marginLeft: '80%', marginBottom:'-10%'}} onClick={() => deleteCat(cat.id)} className='btn text-primary' size={50}></Trash2>
                                <Link to={'/category'} state={{id: cat}}>
                                    <Button variant="secondary" className='text-center border border-info' style={{marginLeft:'25%',marginTop:'-5%'}}>See Details</Button>         
                                    </Link>
                        </div>
    
                

                )) : <h1>Loading..</h1>
            }

            <ToastContainer />

        </div>
    )
}

export default Categories