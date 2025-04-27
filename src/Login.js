import "./login.css";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  return (
    <div className="outer">
      <div className="container">
        <div className="image">
          <img src="https://img.freepik.com/premium-photo/computer-login-page_1299780-4745.jpg" width={"400px"} height={"500px"} />
          <a href="https://www.facebook.com/r.php/"><p>Create an account</p></a>
        </div>
        <div className="login">
          <h2>Log In</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="name">Your name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Your name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />

            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
            />

            <div className="Remember">
              <input id="check" type="checkbox" />Remember me
            </div>

            <button type="button" onClick={handleLogin}>Log in</button>
          </form>

          <div id="logo">
            or login with 
            <span>
              <a href="https://www.facebook.com/r.php/"> 
                <i className="fa-brands fa-facebook"></i>
              </a> 
              <i className="fa-brands fa-twitter"></i> 
              <i className="fa-brands fa-google"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
