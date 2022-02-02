import Link from "next/link";
import { FC, useEffect, useState } from "react";
import styles from "../styles/Navbar.module.css";
import { isAuthenticated } from "../auth";
import { getUsernameFromCookie } from "../util";

export const Navbar: FC = (): JSX.Element => {
  const [username, setUsername] = useState<string>("");
  const authenticated = isAuthenticated();

  useEffect(() => {
    const usernameFromCookie = getUsernameFromCookie();
    setUsername(usernameFromCookie);
  }, []);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h3>
          <Link href={"/"}>JJK HIGH</Link>
        </h3>
      </div>
      <div className={styles.navlinks}>
        {!authenticated && <Link href={"/login"}>Login</Link>}
        {!authenticated && <Link href={"/signup"}>Signup</Link>}
        {authenticated && <Link href={"/createpost"}>Create Post</Link>}
        {authenticated && <Link href={"/explore"}>Explore</Link>}
        {authenticated && <Link href={"/profile"}>Profile</Link>}
        {authenticated && <Link href={"/logout"}>Logout</Link>}
      </div>
    </nav>
  );
};
