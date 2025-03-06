import React, {useState } from 'react'
import './App.css';
import axios from 'axios';

const App = () => {
const backendUrl = import.meta.env.VITE_BACKENDURI;
  const [name, setName] = useState("");
  const [greet,setGreet] = useState("");

  const handlingSubmit = async(e) => {
    e.preventDefault();
    try {

    const response = await axios.get(backendUrl+"/api/greet?name="+name)
    const {message} = response.data;  
    setGreet(message)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <h2>Greeting App</h2>
    <form onSubmit={handlingSubmit} method='GET'>
      <input onChange={(e)=>setName(e.target.value)} value={name} type="text" name='name' placeholder='Enter Name' /> &nbsp;
      <button type='submit'>Get Greeting</button>  
    </form>
     <h3>{greet}</h3>
    </>
  )
}

export default App