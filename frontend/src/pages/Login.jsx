const Login = () => {
    const handleSubmit = () => {
        
    }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Login</legend>
          <label htmlFor="username">Username</label>
          <input required name="username" id="username" />
          <label htmlFor="password">Password</label>
          <input name="password" id="password" />
          <button>Login</button>
        </fieldset>
      </form>
    </>
  );
};

export default Login;
