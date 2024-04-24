import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  
  const[username,setUserName]=useState("");
  const[password,setPassword]=useState("");
  const navigate=useNavigate();

  const state={
    id:Date.now(),
    username:username,
    password:password
  }


  const handlesignup=()=>{
    let oldarr=JSON.parse(localStorage.getItem("credentials"))||[];
    let newarr=[...oldarr,state]
    localStorage.setItem("credentials",JSON.stringify(newarr));
    navigate('/')
  }


  return (
    <div className='d-flex border border-primary justify-content-center align-items-center' style={{height: '600px'}}>
    <Form className='w-25 border border-primary p-5'>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={username} onChange={(e)=>{setUserName(e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
      </Form.Group>

      <Button variant="primary" onClick={handlesignup}>
        SignUp
      </Button>
    </Form>
    </div>
  )
}

export default Signup