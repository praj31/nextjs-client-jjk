import styles from './login.module.css';

export default function Login() {
  return (
      <div className={styles.flexContainer}>
        <div className={styles.formContainer}>
          <div className={styles.loginPage}>
            <div className={styles.form}>
              <form className={styles.loginForm}>
                <h1 className={styles.h1tag}>Login</h1>
                <br />
                <span className={styles.subtitle}>USERNAME:</span>
                <br />
                <input className={styles.input} type="text" name="username" />
                <br />
                <span className={styles.subtitle}>PASSWORD:</span>
                <br />
                <input className={styles.input} type="password" name="password" />
                <br />
                <span className={styles.subtitle}><a href="#">Forgot password?</a></span>
                <br/>
                <br/>
                <input type="submit" value="SUBMIT" className={`${styles.submitBtn} ${styles.input}`} />
                <span className={styles.changeFormBtn}>
                  {" "}
                  Dont have and accout?
                  <a className={styles.atag} href="#"> Register here </a>
                </span>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
}
