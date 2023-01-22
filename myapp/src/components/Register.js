import '../styles/register.css'
import { useState } from 'react';




function Registration() {

const [name,setName] = useState(" ");
const [surName,setSurname] = useState();
const [userName,setUsername] = useState(" ");
const [email,setEmail] = useState(" ");
const [pw,setPW] = useState(" ");


const submithandler = (e) => {
       e.preventDefault();
       const formData = new FormData();
       formData.append('firstName', JSON.stringify(name));
       formData.append('lastName', JSON.stringify(surName));
       formData.append('userName', JSON.stringify(userName));
       formData.append('email', JSON.stringify(email));
       formData.append('password', JSON.stringify(pw));

       fetch('http://localhost:4000',{
              method: "POST",
              body: formData,
              headers: { 'Content-Type': 'application/json' }
       })
       .then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));
}

    return(
       <>
        <h1 className='register-headline'>Registration</h1>
        <form className="register" onSubmit={submithandler}>
        <label>Firstname:</label>
        <input type="text" onChange={(e) => {
              setName(e.target.value);
        }}></input>
        <label>Lastname:</label>
        <input type="text" onChange={(e) => {
              setSurname(e.target.value);
        }}></input>
        <label>Username:</label>
        <input type="text" minLength="5" onChange={(e) => {
              setUsername(e.target.value);
        }}></input>
        <label>E-Mail:</label>
        <input type="email" onChange={(e) => {
              setEmail(e.target.value);
        }}></input>
        <label>Password:</label>
        <input type="password" name="pw"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
               title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required
               onChange={(e) => {
                     setPW(e.target.value);
               }}>  
        </input>
        <label>Repeat Password:</label>
        <input type="password" name="pw"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
               title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>  
        </input>
        <button id="submitbtn">Submit</button>
      </form>
    </>
    )
}


export default Registration;