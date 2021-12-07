export default function Login() {
  return (
    <>
      <div className="flex-container">
        <div className="form-container">
          <div className="login-page">
            <div className="form">
              <form className="login-form">
                <h1>Login</h1>
                <br />
                <span className="subtitle">USERNAME:</span>
                <br />
                <input type="text" name="username" />
                <br />
                <span className="subtitle">PASSWORD:</span>
                <br />
                <input type="password" name="password" />
                <br />
                <span className="subtitle"><a href="#">Forgot password?</a></span>
                <br/>
                <br/>
                <input type="submit" value="SUBMIT" className="submit-btn" />
                <span className="change-form-btn">
                  {" "}
                  Dont have and accout?
                  <a href="#"> Register here </a>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
