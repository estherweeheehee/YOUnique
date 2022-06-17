const Login = () => {
  const handleSubmitLogin = () => {};

  const handleSubmitSignup = () => {

  }

  return (
    <>
      <div>
        <div className="login">
          <form onSubmit={handleSubmitLogin}>
            <fieldset>
              <legend>Login</legend>
              <label htmlFor="username">Username</label>
              <input required name="username" id="username" />
              <label htmlFor="password">Password</label>
              <input name="password" id="password" />
              <button>Login</button>
            </fieldset>
          </form>
        </div>

        <div className="signup">
          <form onSubmit={handleSubmitSignup}>
            <fieldset>
              
            </fieldset>

          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
