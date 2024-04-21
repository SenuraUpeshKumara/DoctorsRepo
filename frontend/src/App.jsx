import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Doctors from './Doctors';
import CreateDoctor from './CreateDoctor';
import UpdateDoctor from './UpdateDoctor';


function App() {
  const [count,setCount] = useState([])

  return (
    <div>
      <BrowserRouter>
      <Routes>

        <Route path='/' element={<Doctors/>}></Route>
        <Route path='/createdoctor' element={<CreateDoctor/>}></Route>
        <Route path='/update/:id' element={<UpdateDoctor/>}></Route>
        
       
      </Routes>
      
      </BrowserRouter>
      
    </div>
  )
}

export default App
