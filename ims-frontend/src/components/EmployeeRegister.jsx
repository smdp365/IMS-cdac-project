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
        <h2>Registration Page</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" name="id" value={formData.id} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="mobile">Mobile No:</label>
            <input type="text" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
  