import Login from "../components/Login";
import Signup from "../components/Signup";

const LoginSignup = () => {
  

  

  return (
    <>
      <div>
        <div className="login">
          <Login />
        </div>

        <div className="signup">
          <Signup />
        </div>
      </div>
    </>
  );
};

export default LoginSignup;
