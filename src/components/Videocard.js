import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {Trash2} from 'react-feather'
import { addHistory, deleteVideo } from '../services/allapis';
import 'react-toastify/dist/ReactToastify.css';
import uniqid from 'uniqid';
import { format } from 'date-fns';




function Videocard({video,deleteFunc}) {


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    
    const handleShow = async () => {
        setShow(true);

        //arrange inputs as argment to API Call Watch History
        //id
        var id=uniqid();
        //title
        var video_title=video.caption;
        //url
        var url=video.video_url;
        //date
        // let date=new Date().toLocaleString('en-US');

        let date= format(new Date(), 'yyyy-MM-dd h:mm:ss a')
        

        //body

        const body={id,video_title,url,date}

        if(body){

            //API Call for Watch History

           const result= await addHistory(body);
           
        }
        
        
    }

    const handleDelete=async (id)=>{
        //API Call to Delete
        const result= await deleteVideo(id);
        
        
        if(result.status>=200 && result.status<300)
        {
            deleteFunc(result.data);
        }
    }

    const dragStart=(e,id)=>{
        console.log("Dragging Started"+id);
        
        //storing of dragged data till drop
        e.dataTransfer.setData("cardID",id)
    }

    return (

        <div>

            {/* IMAGE TAGS */}
    
                
                <Card draggable onDragStart={(e)=>dragStart(e,video.id)} className='border border-black'>
                <Card.Img style={{ width: '100%', height: '220px' }} variant="top" src={video.cover_image} onClick={handleShow} />
                <Card.Body>
                <Card.Title>{video.caption}</Card.Title>
                <div className='text-end'>
                    <Trash2 onClick={()=>handleDelete(video.id)} className='btn text-primary' size={50}></Trash2>
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
                    <iframe width="100%" height="300px" src={video.video_url} title="SPADIKAM Official Trailer 4K | R Mohan | Mohanlal | Bhadran | Myth Production | Geometric Film House" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
