import './App.css';


function App() {
  return (
    <div className="App">
      <h1>Registration</h1>
      <form className="register" type="submit">
        <label>Firstname:</label>
        <input type="text"></input>
        <label>Lastname:</label>
        <input type="text"></input>
        <label>Username:</label>
        <input type="text" minlength="5"></input>
        <label>E-Mail:</label>
        <input type="email"></input>
        <label>Password:</label>
        <input type="password" name="pw"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
               title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>  
        </input>
        <label>Repeat Password:</label>
        <input type="password" name="pw"  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
               title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>  
        </input>
        <button id="submitbtn">Submit</button>
      </form>
    </div>
  );
}

export default App;
