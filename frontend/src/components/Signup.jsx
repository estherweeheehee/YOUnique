import { useState } from "react"

const Signup = () => {
   
    const [signUp, setSignUp] = useState({
        username: "",
        password: "",
        email: "",
        first_name: "",
        last_name: "",
        display_pic_url: "",
        user_description: ""
    })

    const handleChange = (event, key) => {
        setSignUp({
            ...signUp,
            [key]: event.target.value
        })
    }
    
    const handleSubmitSignup = (event) => {
        
        event.preventDefault();
        fetch("/api/user/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify( signUp ),
          })
            .then((response) => response.json())
            .then((data) => console.log(data));
    }

    return (
        <form method="post" onSubmit={handleSubmitSignup}>
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
              value={signUp.first_name}
              onChange={() => handleChange(event, "first_name")}
              />
              <label htmlFor="lastname">Last Name</label>
              <input className="inputfield" 
              required 
              type="text" 
              placeholder="last name"
              name="lastname" 
              id="lastname" 
              value={signUp.last_name}
              onChange={() => handleChange(event, "last_name")}
              />

              <br/>
              <label htmlFor="userpicture">Display Picture</label>
              <input className="inputfield" 
              required 
              type="text" 
              placeholder="enter url of display picture"
              name="userpicture" 
              id="userpicture" 
              value={signUp.display_pic_url}
              onChange={() => handleChange(event, "display_pic_url")}
              />
              <br/>
              <label htmlFor="userdescription">User Description</label>
              <input className="inputfield" 
              required 
              type="text" 
              placeholder="enter description of yourself"
              name="userdescription" 
              id="userdescription"
              value={signUp.user_description}
              onChange={() => handleChange(event, "user_description")}
              />

              <br/>
              <button>Sign Up</button>
            </fieldset>

          </form>
    )
}

export default Signup