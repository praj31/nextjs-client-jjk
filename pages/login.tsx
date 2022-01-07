import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/login-signup.module.css";
import usePasswordToggle from "../hooks/usePasswordToggle";
import { PasswordField } from "../components/FontawsomeIcons/PasswordField";

const Login: NextPage = () => {
  // const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const [visible, setVisible] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onHandleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(JSON.stringify({ username: `${username}` }));
    console.log(JSON.stringify({ password: `${password}` }));
    setUsername("");
    setPassword("");
  };

  return (
    <div className={styles.container}>
      <section className={styles.img_wrap}>
        <Image
          src="/login_panel.jpg"
          width={1092}
          height={2048}
          layout="fill"
        />
      </section>
      <section className={styles.form_wrap}>
        <div className={styles.the_form}>
          <h1 className={styles.title_h1}>Welcome to Jujutsu High</h1>
          <hr className={styles.hr_divider} />
          <form onSubmit={onHandleSubmit}>
            <div className={styles.form_fields}>
              <fieldset>
                <label className={styles.label_name} htmlFor="login">
                  Username
                </label>
                <input
                  value={username}
                  type="text"
                  className={styles.input_area}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </fieldset>
              <fieldset>
                <label className={styles.label_name} htmlFor="login">
                  Password
                  <Link href="#">
                    <a className={styles.link}>Forgot Password?</a>
                  </Link>
                </label>
                {/* <input
                  value={password}
                  // type={`${PasswordInputType}`}
                  type={visible ? "text" : "password"}
                  className={styles.input_area}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <span className={styles.eye_icon}>
                  {
                    <FontAwesomeIcon
                      icon={visible ? "eye-slash" : "eye"}
                      onClick={() => setVisible(!visible)}
                    />
                  }
                </span> */}
                <PasswordField password={password} setPassword={setPassword}/>

              </fieldset>
            </div>
            <input className={styles.input_btn} type="submit" value="Login" />
            <div className={styles.asker}>
              <span className={styles.span_member}>
                Not a member?
                <Link href="/signup" >
                  <a className={styles.link_primary}>
                    Join now
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

export default Login;
