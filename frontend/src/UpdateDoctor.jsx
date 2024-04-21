import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateDoctor() {

    const {id} = useParams();
    const [name, setName] = useState('');
    const [sp, setSp] = useState('');
    const navigate = useNavigate();

    

    useEffect(() => {
        axios.get('http://localhost:3001/getDoctor/' + id)
            .then(result => {console.log(result)

                setName(result.data.name)
                setSp(result.data.sp)
           
            })
            .catch(err => console.log(err));
    }, [])

    const Update = (e) => {
        e.preventDefault();

        axios.put("http://localhost:3001/updateDoctor/"+id, { name,sp })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center' style={{ backgroundColor: '#e9ecef'}}>
            <div className='w-50 bg-white rounded p-3' style={{ fontWeight: 'bold' }}>
                <form onSubmit={Update}>
                <h2 style={{ color: 'black'}}>Update Supplier Information</h2><br />
                   
                <div className='mb-2'>
                        <label htmlFor="name">Doctor Name</label>
                        <input type="text" placeholder='Enter name' className='form-control' value={name} onChange={(e) => setName(e.target.value)} required/>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="name">Specialization</label>
                        <input type='text' placeholder='Enter specialization' className='form-control' value={sp} onChange={(e) => setSp(e.target.value)} required />
                            
                        
                     </div>
                    
                    <br />
                    <button className='btn btn-light rounded-2' style={{ backgroundColor: '#001f3f'}}><h6 style={{ color: 'white' }}>Update</h6></button>
                </form>
            </div>
        </div>
    );
}

export default UpdateDoctor;
