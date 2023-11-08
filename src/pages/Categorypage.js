import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import { Trash2 } from 'react-feather';
import { getAllCat, updateCategory } from '../services/allapis';




function Categorypage() {

    const location = useLocation();

    const [categories, setCategories] = useState([])

    // console.log(location);

    const category = location.state.id; //selected catgory

    const getAllCategories = async () => {

        const result = await getAllCat()

        if (result.status >= 200 && result.status < 300) {
            setCategories(result.data);
        }
    }

    //Deletion of video from category

    const deletecatvideo= async (id)=>{

        const catId= category.id

        const filtervideo=category.videos.filter(i=> i.id!=id)

        category.videos.splice(0,category.videos.length)

        category.videos.push.apply(category.videos,filtervideo);

        const res= await updateCategory(catId,category)

        getAllCategories()

    }

    useEffect(() => {

        getAllCategories();

    }, [])
   

    return (


        <div className='m-5'>
            <h1 className='mt-5 p-2 text-center' style={{ fontFamily: 'Agbalumo'}}>Selected Category: <span style={{ color: 'red' }}>{category.name}</span></h1>

            <Container>
                <Row>
                    {
                        category.videos.length > 0 ? category.videos.map(i =>


                            <Col lg={6} md={6} sm={12}>
                                <div style={{ display: 'flex', justifyContent: 'space-evenly' }} className='mt-5 mb-2'>

                                    <Card style={{ width: '20rem' }}>
                                        <Card.Img style={{ width: '100%', height: '300px', borderRadius: '220px' }} variant="top" src={i.cover_image} />
                                        <Card.Body>
                                            <Card.Title style={{ textAlign: 'center', fontFamily: 'Nosifer' }} className='mt-2'>{i.caption}</Card.Title>
                                            <Card.Text>

                                            </Card.Text>
                                            <div className='text-center border border-secondary'>
                                                <Trash2 className='btn text-primary' size={50} onClick={()=>deletecatvideo(i.id)}></Trash2>
                                            </div>

                                        </Card.Body>
                                    </Card>
                                </div>

                            </Col>

                        ) : <h1 className='mt-5 text-center border p-5' style={{borderRadius:'250px'}}><span style={{color:'red'}}>"</span> No Videos Added <span style={{color:'red'}}>"</span></h1>

                    }
                </Row>
            </Container>
        </div>
    )
}

export default Categorypage