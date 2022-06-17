import Signup from "../components/Signup";

const LoginSignup = () => {
  const handleSubmitLogin = () => {};

  

  return (
    <>
      <div>
        <div className="login">
          <form onSubmit={handleSubmitLogin}>
            <fieldset>
              <legend>Login</legend>
              <label htmlFor="username">Username</label>
              <input className="inputfield" required name="username" id="username" />

              <label htmlFor="password">Password</label>
              <input className="inputfield" name="password" id="password" />
              <button>Login</button>
            </fieldset>
          </form>
        </div>

        <div className="signup">
          <Signup />
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
