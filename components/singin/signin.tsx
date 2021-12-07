export default function Signin() {
    return (
      <>
        <div className="flex-container">
          <div className="form-container">
            <div className="login-page">
              <div className="form">
                <form className="login-form">
                  <h1>Register</h1>
                  <br/>
                  <span className="subtitle">FIRSTNAME:</span>
                  <br />
                  <input type="text" name="firstname" />
                  <br />
                  <span className="subtitle">LASTNAME:</span>
                  <br />
                  <input type="text" name="lastname" />
                  <br />
                  <span className="subtitle">EMAIL:</span>
                  <br />
                  <input type="text" name="email" />
                  <br />
                  <span className="subtitle">USERNAME:</span>
                  <br />
                  <input type="text" name="username" />
                  <br />
                  <span className="subtitle">PASSWORD:</span>
                  <br />
                  <input type="password" name="password" />
                  <br />
                  <span className="subtitle">REPEAT PASSWORD:</span>
                  <br />
                  <input type="password" name="password" />
                  <br />
                  <input type="submit" value="REGISTER" className="submit-btn" />
                  <span className="change-form-btn">
                    {" "}
                    Already have and accout?
                    <a href="#"> Login here </a>
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  