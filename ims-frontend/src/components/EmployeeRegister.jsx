import axios from 'axios';
import {useState } from "react";

function EmployeeRegistation() 
{
    const [id, setId] = useState('');
    const [name, setName] = useState("");
    const [mobileno, setMobile] = useState("");
    const [Email, setEmail] = useState("");
    const [pasword, setpassword] = useState("");


    async function register(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/register",
        {
        
        empname: name,
        Email : address,
        mobileno : mobileno,
        password : password
        
        });
          alert("Employee Registation Successfully");
          setId("");
          setName("");
          setMobile("");
          setEmail("");
          setpassword("");
          
        
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }
    return (
      <div>
      <h2 className="register-heading"> Employee Registration </h2>
        <form onSubmit={handleSubmit}>
          <div className="col-md-9 register-right">
            {/* <label htmlFor="id">EMPID:</label> */}
            <input type="text" placeholder='Empid' required value={formData.id} onChange={handleChange}/>
                 
          </div>
          <div className='input-box'>
            {/* <label htmlFor="name">EMPNAME:</label> */}
            <input type="text" placeholder='Empname' required value={formData.name} onChange={handleChange} />
          </div>
          <div className='input-box'>
            {/* <label htmlFor="mobile">Mobile No:</label> */}
            <input type="text" placeholder='Mobile No' required value={formData.mobile} onChange={handleChange} />
          </div>
          <div className='input-box'>
            {/* <label htmlFor="email">Email:</label> */}
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            <FaUser className='icon'/> 
          </div>
          <div className='input-box'>
            {/* <label htmlFor="password">Password:</label> */}
            <input type="password" placeholder='Password' required  value={formData.password} onChange={handleChange} />
            <FaLock className='icon'/>
          </div>
          <button type="submit">Register</button>
          <div className='register-link'>
                <p>Do you already have an account?<a href="#">Login</a></p>
            </div>
        </form>
      </div>
      
     );
  }
  
  export default EmployeeRegister;
   