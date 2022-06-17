import { useState } from "react";

const Login = () => {
    const [login, setLogin] = useState({
        username: "",
        password: ""
        
    })

    const handleChange = (event, key) => {
        setLogin({
            ...login,
            [key]: event.target.value
        })
    }

    

    const handleSubmitLogin = (event) => {
        event.preventDefault();
        console.log("click");
    };
        
    return (
        <form onSubmit={handleSubmitLogin}>
            <fieldset>
              <legend>Login</legend>
              <label htmlFor="username">Username</label>
              <input 
              className="inputfield" 
              required 
              name="username" 
              id="username" 
              value={username}
              onChange={() => handleChange(event, "username")}
              />

              <label htmlFor="password">Password</label>
              <input className="inputfield" 
              required 
              name="password" 
              id="password" 
              value={password}
              onChange={() => handleChange(event, "password")}
              />
              <button>Login</button>
            </fieldset>
          </form>
    )
}

export default Login