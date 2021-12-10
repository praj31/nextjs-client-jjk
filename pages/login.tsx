import { NextPage } from "next"
import Image from 'next/image'
import Link from "next/link"
import styles from '../styles/login-signup.module.css'

const Login: NextPage = () => {
    return (
        
            <div className={styles.container}>
                <section className={styles.imgWrap}>
                    <Image
                    src='/L1.jpg'
                    layout="fill"
                    />
                </section>
                <section className={styles.formWrap}>
                    <div className={styles.theForm}>
                        <h1 className={styles.h1}>Welcom to JJK Family.</h1>
                        <hr className={styles.divider} />
                        <form action="">
                            <div className={styles.formFields}>
                            <fieldset>
                                <label className={styles.label} htmlFor="login">Username</label>
                                <input type="text" className={styles.input}/>
                            </fieldset>
                            <fieldset>
                                <label className={styles.label} htmlFor="login">Password
                                    <Link href="#">
                                        <a className={styles.link} href="">Forgot Password?</a>
                                    </Link>
                                </label>
                                <input type="password" className={styles.input}/>
                            </fieldset>
                            </div>
                            <input className={styles.inputBtn} type="submit" value="Login"/>
                            <div className={styles.asker}>
                            <span className={styles.span}>Not a member? 
                                <Link href="/signup">
                                    <a className={styles.blueLink} href="/signup">Join now</a>
                                </Link>
                            </span>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        
    )
}

export default Login
