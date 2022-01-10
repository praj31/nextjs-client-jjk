import { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/login-signup.module.css";
import usePasswordToggle from "../hooks/usePasswordToggle";
import { Navbar } from "../components/Navbar"

const Signup: NextPage = () => {
  const [PasswordInputType, ToggleIcon] = usePasswordToggle();
  const [firstname, setFirstname] = useState<string>("");
  const [lastname, setLastname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmpassword, setConformpassword] = useState<string>("");

  const onHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(JSON.stringify({ Firstname: `${firstname}` }));
    console.log(JSON.stringify({ Lastname: `${lastname}` }));
    console.log(JSON.stringify({ Username: `${username}` }));
    console.log(JSON.stringify({ Email: `${email}` }));
    console.log(JSON.stringify({ Password: `${password}` }));
    setFirstname("");
    setLastname("");
    setUsername("");
    setEmail("");
    setPassword("");
    setConformpassword("");
  };

  return (
    <>
    <Navbar />
    <div className={styles.container}>
      <section className={styles.img_wrap}>
        <Image
          src="/signin_panel.jpg"
          layout="fill"
          width={750}
          height={1334}
          alt="signin_panel img"
        />
      </section>
      <section className={styles.form_wrap}>
        <div className={styles.the_form}>
          <h1 className={styles.title_h1}>Expand Your Domain!</h1>
          <hr className={styles.hr_divider} />
          <form onSubmit={onHandleSubmit}>
            <div className={styles.form_fields}>
              <div className={styles.field_breaker}>
                <div className={styles.form_field_container}>
                  <fieldset>
                    <label className={styles.label_name} htmlFor="login">
                      Firstname
                    </label>
                    <input
                      value={firstname}
                      type="text"
                      className={styles.input_area}
                      onChange={(e) => setFirstname(e.target.value)}
                    />
                  </fieldset>
                </div>
                <div className={styles.form_field_container}>
                  <fieldset>
                    <label className={styles.label_name} htmlFor="login">
                      Lastname
                    </label>
                    <input
                      value={lastname}
                      type="text"
                      className={styles.input_area}
                      onChange={(e) => setLastname(e.target.value)}
                    />
                  </fieldset>
                </div>
              </div>
              <fieldset>
                <label className={styles.label_name} htmlFor="login">
                  Pick a cool username
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
                  Email
                </label>
                <input
                  value={email}
                  type="text"
                  className={styles.input_area}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </fieldset>
              <fieldset>
                <label className={styles.label_name} htmlFor="login">
                  Password
                </label>
                <input
                  value={password}
                  type={`${PasswordInputType}`}
                  className={styles.input_area}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </fieldset>
              <fieldset>
                <label className={styles.label_name} htmlFor="login">
                  Re-enter Password
                </label>
                <input
                  value={confirmpassword}
                  type={`${PasswordInputType}`}
                  className={styles.input_area}
                  onChange={(e) => setConformpassword(e.target.value)}
                />
                <span className={styles.eye_icon}>{ToggleIcon}</span>
              </fieldset>
            </div>
            <input
              className={styles.input_btn}
              type="submit"
              value="Let's go!"
            />
            <div className={styles.asker}>
              <span className={styles.span_member}>
                Already a member?
                <Link href="/login">
                  <a className={styles.link_primary}>
                    Login
                  </a>
                </Link>
              </span>
            </div>
          </form>
        </div>
      </section>
    </div>

    </>
  );
};

export default Signup;
