import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/login-signup.module.css";

const Signup: NextPage = () => {
  return (
    <div className={styles.container}>
      <section className={styles.imgWrap}>
        <Image src="/S1.jpg" layout="fill" width={750} height={1334} />
      </section>
      <section className={styles.formWrap}>
        <div className={styles.theForm}>
          <h1 className={styles.h1}>Expand Your Domain!</h1>
          <hr className={styles.divider} />
          <form onSubmit={(e) => e.preventDefault()}>
            <div className={styles.formFields}>
              <div className={styles.fieldBreaker}>
                <div className={styles.formFieldContainer}>
                  <fieldset>
                    <label className={styles.label} htmlFor="login">
                      Firstname
                    </label>
                    <input type="text" className={styles.input} />
                  </fieldset>
                </div>
                <div className={styles.formFieldContainer}>
                  <fieldset>
                    <label className={styles.label} htmlFor="login">
                      Lastname
                    </label>
                    <input type="text" className={styles.input} />
                  </fieldset>
                </div>
              </div>
              <fieldset>
                <label className={styles.label} htmlFor="login">
                  Pick a cool username
                </label>
                <input type="text" className={styles.input} />
              </fieldset>
              <fieldset>
                <label className={styles.label} htmlFor="login">
                  Email
                </label>
                <input type="text" className={styles.input} />
              </fieldset>
              <fieldset>
                <label className={styles.label} htmlFor="login">
                  Password
                </label>
                <input type="password" className={styles.input} />
              </fieldset>
              <fieldset>
                <label className={styles.label} htmlFor="login">
                  Re-enter Password
                </label>
                <input type="password" className={styles.input} />
              </fieldset>
            </div>
            <input className={styles.inputBtn} type="submit" value="Let's go!" />
            <div className={styles.asker}>
              <span className={styles.span}>
                Already a member?
                <Link href="/login">
                  <a className={styles.blueLink} href="/login">
                    Login
                  </a>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Signup;
