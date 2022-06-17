import { useState } from "react"

const Signup = () => {
   
    const [signUp, setSignUp] = useState({
        username: "",
        password: "",
        email: "",
        firstname: "",
        lastname: "",
        userpicture: "",
        userdescription: ""
    })

    const handleChange = (event, key) => {
        setSignUp({
            ...signUp,
            [key]: event.target.value
        })
    }
    
    const handleSubmitSignup = () => {
        console.log("click")
    }

    return (
        <form onSubmit={handleSubmitSignup}>
            <fieldset>
              <legend>Sign Up</legend>
              <label htmlFor="username">Username</label>
              <input className="inputfield" 
              required
              type="text" 
              placeholder="username"
              name="username" 
              id="username"
              value={signUp.username}
              onChange={() => handleChange(event, "username")}
              />
              
              <label htmlFor="password">Password</label>
              <input className="inputfield" 
              required 
              type="text" 
              placeholder="password"
              name="password" 
              id="password" 
              value={signUp.password}
              onChange={() => handleChange(event, "password")}
              />
              <br/>
              <label htmlFor="email">Email</label>
              <input className="inputfield" 
              required 
              type="email" 
              placeholder="email"
              name="email" 
              id="email" 
              value={signUp.email}
              onChange={() => handleChange(event, "email")}
              />
              
              <br/>
              <label htmlFor="firstname">First Name</label>
              <input className="inputfield" 
              required 
              type="text" 
              placeholder="first name"
              name="firstname" 
              id="firstname" 
              value={signUp.firstname}
              onChange={() => handleChange(event, "firstname")}
              />
              <label htmlFor="lastname">Last Name</label>
              <input className="inputfield" 
              required 
              type="text" 
              placeholder="last name"
              name="lastname" 
              id="lastname" 
              value={signUp.lastname}
              onChange={() => handleChange(event, "lastname")}
              />

              <br/>
              <label htmlFor="userpicture">Display Picture</label>
              <input className="inputfield" 
              required 
              type="text" 
              placeholder="enter url of display picture"
              name="userpicture" 
              id="userpicture" 
              value={signUp.userpicture}
              onChange={() => handleChange(event, "userpicture")}
              />
              <br/>
              <label htmlFor="userdescription">User Description</label>
              <input className="inputfield" 
              required 
              type="text" 
              placeholder="enter description of yourself"
              name="userdescription" 
              id="userdescription"
              value={signUp.userdescription}
              onChange={() => handleChange(event, "userdescription")}
              />

              <br/>
              <button>Sign Up</button>
            </fieldset>

          </form>
    )
}

export default Signup