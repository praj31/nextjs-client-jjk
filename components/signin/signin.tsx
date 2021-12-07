import styles from '../../styles/login-signup.module.css'

export default function Signin() {
  return (
    <>
      <div className={styles.flexContainer}>
        <div className={styles.formContainer}>
          <div className={styles.loginPage}>
            <div className={styles.form}>
              <form className={styles.loginForm}>
                <h1 className={styles.h1tag}>Register</h1>
                <br />
                <span className={styles.subtitle}>FIRSTNAME:</span>
                <br />
                <input className={styles.input} type="text" name="firstname" />
                <br />
                <span className={styles.subtitle}>LASTNAME:</span>
                <br />
                <input className={styles.input} type="text" name="lastname" />
                <br />
                <span className={styles.subtitle}>USERNAME:</span>
                <br />
                <input className={styles.input} type="text" name="username" />
                <br />
                <span className={styles.subtitle}>EMAIL:</span>
                <br />
                <input className={styles.input} type="text" name="email" />
                <br />
                <span className={styles.subtitle}>PASSWORD:</span>
                <br />
                <input
                  className={styles.input}
                  type="password"
                  name="password"
                />
                <br />
                <span className={styles.subtitle}>CONFIRM PASSWORD:</span>
                <br />
                <input
                  className={styles.input}
                  type="password"
                  name="password"
                />
                <br />
                <br />
                <input
                  type="submit"
                  value="REGISTER"
                  className={`${styles.submitBtn} ${styles.input}`}
                />
                <span className={styles.changeFormBtn}>
                  {" "}
                  Already have and accout?
                  <a className={styles.atag} href="#">
                    {" "}
                    Login here{" "}
                  </a>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
