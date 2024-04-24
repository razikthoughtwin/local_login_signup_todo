import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () => {
  const[username,setUserName]=useState("");
  const[password,setPassword]=useState("");




    const handlelogin=()=>{
      let credentials=JSON.parse(localStorage.getItem("credentials"));
      console.log(credentials.username)
      let user=credentials.find((item)=>{
        return item.username===username && item.password===password
      })

      if(user)
      {
        localStorage.setItem("token",true)
        window.location.href="dasboard"
      }                                                                                                                             

      // else{
      //   alert("please fill the credentials")
      // }


        
    }

  return (
    <div className='d-flex border border-primary justify-content-center align-items-center' style={{height: '600px'}}>
        <Form className='w-25 border border-primary p-5'>
      <Form.Group className="mb-4 form-group" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={username} onChange={(e)=>{setUserName(e.target.value)}} />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
      </Form.Group>

      <Button variant="primary" onClick={()=>{handlelogin()}}>
        Login
      </Button>
      </Form>
    </div>
  )
}

export default Login