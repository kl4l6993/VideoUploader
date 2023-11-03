import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import uniqid from 'uniqid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, delCategory, getAllCat } from '../services/allapis';
import { Trash2 } from 'react-feather';


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

    const deleteCat = async(id)=>{
        
      const result=  await delCategory(id);

      if(result.status>=200 && result.status<300)
        {
            //this is to refresh front end after deletion of category
            getAllCategories()
        }

    }
    

    useEffect(() => {

        getAllCategories();

    }, [])



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
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
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

                    <div style={{ border:'1px solid black'}} className='mt-4 p-2'>

                        <h4 style={{color:'red',fontFamily:'Cinzel',fontSize:'20px',border:'1px solid red',textAlign:'center',alignItems:'center'}}>..{cat.name}..</h4>
                    
                        <div>
                        {/* image */}
                        </div>

                        <Trash2 style={{color: 'red',marginLeft:'92%',marginBottom:'0%'}} onClick={()=>deleteCat(cat.id)}></Trash2>

                    </div>


                )) : <h1>Loading..</h1>
            }

            <ToastContainer />

        </div>
    )
}

export default Categories