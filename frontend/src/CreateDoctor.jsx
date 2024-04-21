import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function CreateDoctor() {
    const [name,setName] = useState('');
    const [sp,setSp] = useState('');
   
    
    const navigate = useNavigate();

  
    

    const Submit = (e) => {
        e.preventDefault();

   

        axios.post("http://localhost:3001/Createdoctor", { name,sp })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
    };

    return (
        <div className='d-flex vh-100 justify-content-center align-items-center' style={{ backgroundColor: '#e9ecef'}}>
            
            <div className='w-50 bg-white rounded p-3' style={{ fontWeight: 'bold' }}>
                <form onSubmit={Submit}>
                    <h2 style={{ color: 'black'}}>Add a Doctor</h2><br />
                    <div className='mb-2'>
                        <label htmlFor="name">Doctor Name</label>
                        <input type="text" placeholder='Enter name' className='form-control' onChange={(e) => setName(e.target.value)} required/>
                    </div>
<br></br>
                    <div className='mb-2'>
                        <label htmlFor="name">Specialization</label>
                        <input type='text' placeholder='Enter specialization' className='form-control' onChange={(e) => setSp(e.target.value)} required />
                            
                        
                     </div>

                   <br></br>
                    <button className='btn btn-light rounded-2' style={{ backgroundColor: '#001f3f'}}><h6 style={{ color: 'white' }}>Submit</h6></button>
                    
                </form>
               
            </div>
        </div>
    );
}

export default CreateDoctor;
