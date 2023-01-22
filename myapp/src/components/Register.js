import '../styles/register.css'
import { useState } from 'react';



function Registration() {

const [name,setName] = useState(" ");
const [surName,setSurname] = useState();
const [userName,setUsername] = useState(" ");
const [email,setEmail] = useState(" ");
const [pw,setPW] = useState(" ");
const [repeatPW,setRepeat] = useState(" ");


const submithandler = (e) => {  

      if(repeatPW !== pw) {
            return alert("the password is wrong");
      }

       e.preventDefault();
       const allData = {

            firstName: name,
            lastName: surName,
            userName: userName,
            email: email,
            password: pw
       }

       const options = { 
            method: 'post',
            headers: {
              'Accept': 'application/json, text/plain, */*',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(allData)
          }    

       fetch('http://localhost:4000/', options)
       .then(response => response.json())
	.then(data => console.log(data))
	.catch(err => console.error(err));
}

    return(
       <>
        <h1 className='register-headline'>Registration</h1>
        <form className="register" onSubmit={submithandler}>
        <label>Firstname:</label>
        <input type="text" name='firstName' onChange={(e) => {
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
        <input type="password" name="pw"  /* pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
               title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required */
               onChange={(e) => {
                     setPW(e.target.value);
               }}>  
        </input>
        <label>Repeat Password:</label>
        <input type="password" name="pw"  /* pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
               title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required */
               onChange={(e) => {
                  setRepeat(e.target.value);
            }}>  
        </input>
        <button id="submitbtn">Submit</button>
      </form>
    </>
    )
}


export default Registration;