import React, { useState } from 'react'


const Login = () => {

const [user,setuser]=useState({username:'',password:''});

const handleChange =event=>{
  const {name,value} =event.target; 
  setuser({...user,[name]:value});
};

const handleSubmit = event =>{
  event.preventDefault();
  console.log(user.username,user.password);
};




  return (
    <div>
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit}>
<label>
  UserName:&nbsp;&nbsp;
  <input type='Text' name='username' value={user.username}  onChange={handleChange}/> 
</label><br/><br/>


<label>
  Password:&nbsp;&nbsp;
  <input type='password' name='password' value={user.password}  onChange={handleChange}/> 
</label><br/><br/>





      </form>
      
    </div>
  )
}

export default Login
