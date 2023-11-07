import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import { Trash2 } from 'react-feather';
import { delHistory, getAllHistory } from '../services/allapis';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function History() {

    const [hist, setHist] = useState([])

    const getHistory = async () => {
        const { data } = await getAllHistory();
        setHist(data);
    }

    const deleteHistory=async (id)=>{

       const result = await delHistory(id);

       if(result.status>=200 && result.status<300)
       {
        getHistory();
       }

    }





    useEffect(() => {

        getHistory();

    }, [])


    return (
        <div className='ms-5 me-5 p-2'>
            <h2 className='mt-5' style={{ fontFamily: 'Permanent Marker', textAlign: 'center', fontSize: '50px'}}><span style={{ color: 'red' }}>W</span>atch <span style={{ color: 'red' }}>H</span>istory</h2>
        <Link to={'/home'} style={{textDecoration:'none'}}>
                <div style={{display:'flex',justifyContent:'end',marginTop:'20px'}}><Button className='mt-4 btn btn-info' style={{borderRadius:'20px',width:'150px',height:'40px'}}><i className="fa-solid fa-backward"></i>  Go Back</Button></div>
    
        </Link>
        
        {

                hist.length > 0 ? (

                    <Table responsive striped bordered hover variant='dark' className='mt-4 w-100 container border'>
                        <thead style={{height:'65px',fontSize:'20px', textAlign: "center", verticalAlign: 'middle',fontStyle:'italic'}}>
                            <tr>
                                <th style={{color:'orange'}}>#</th>
                                <th style={{color:'orange'}}>DATE</th>
                                <th style={{color:'orange'}}>TITLE</th>
                                <th style={{color:'orange'}}>VIDEO URL</th>
                            </tr>
                        </thead>
                        {
                        hist?.map((i, index) => (

                            <tbody style={{ textAlign: "center" }}>
                                <tr style={{ verticalAlign: 'middle' }}>
                                    <td>{index+1}</td>
                                    <td>{i.date}</td>
                                    <td>{i.video_title}</td>
                                    <td>{i.url}</td>
                                    <td className='text-center'><Trash2 size={50} className='btn' style={{ color: 'red',verticalAlign: 'bottom'}} onClick={()=>deleteHistory(i?.id)}></Trash2></td>
                                </tr>
                            </tbody>

                        )
                        )}
                    </Table>

                ) : <h2 className='mt-5' style={{ color: 'red', textAlign: 'center' }}>No Watch Histories!</h2>

            }

            <br />


        </div>
    )
}

export default History