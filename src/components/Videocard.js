import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Trash2} from 'react-feather'
import { deleteVideo } from '../services/allapis';
import 'react-toastify/dist/ReactToastify.css';




function Videocard({video,deleteFunc}) {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete=async (id)=>{
        //API Call to Delete
        const result= await deleteVideo(id);
        
        
        if(result.status>=200 && result.status<300)
        {
            deleteFunc(result.data);
        }
    }

    return (

        <div>

            {/* IMAGE TAGS */}
    
                
                <Card style={{ border: '1px dotted black' }}>
                <Card.Img style={{ width: '100%', height: '220px' }} variant="top" src={video.cover_image} onClick={handleShow} />
                <Card.Body>
                <Card.Title>{video.caption}</Card.Title>
                <div className='text-end'>
                    <Trash2 onClick={()=>handleDelete(video.id)} className='text-primary'></Trash2>
                </div>
                </Card.Body>
                </Card>

                <br />


                {/* MODAL BOX */}
                
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{video.caption}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                    <iframe width="469px" height="300px" src={video.video_url} title="SPADIKAM Official Trailer 4K | R Mohan | Mohanlal | Bhadran | Myth Production | Geometric Film House" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
        </div>
    )

}

export default Videocard
