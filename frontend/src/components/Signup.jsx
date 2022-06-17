const Signup = () => {
    const handleSubmitSignup = () => {

    }
    
    return (
        <form onSubmit={handleSubmitSignup}>
            <fieldset>
              <legend>Sign Up</legend>
              <label htmlFor="username">Username</label>
              <input className="inputfield" required name="username" id="username"/>
              
              <label htmlFor="password">Password</label>
              <input className="inputfield" required name="password" id="password" />
              <br/>
              <label htmlFor="email">Email</label>
              <input className="inputfield" required name="email" id="email" />
              <br/>
              <label htmlFor="firstname">First Name</label>
              <input className="inputfield" required name="firstname" id="firstname" />
              <label htmlFor="lastname">Last Name</label>
              <input className="inputfield" required name="lastname" id="lastname" />

              <br/>
              <label htmlFor="userpicture">Display Picture</label>
              <input className="inputfield" required name="userpicture" id="userpicture" />
              <br/>
              <label htmlFor="userdescription">User Description</label>
              <input className="inputfield" required name="userdescription" id="userdescription" />

              <br/>
              <button>Sign Up</button>
            </fieldset>

          </form>
    )
}

export default Signup