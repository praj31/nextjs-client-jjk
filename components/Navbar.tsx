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
        <h3>JJK HIGH</h3>
      </div>
      <div className={styles.navlinks}>
        <Link href={"/"}>Home</Link>
        {authenticated && (
          <Link
            href={{
              pathname: "/[username]",
              query: { username: username },
            }}
          >
            Protected
          </Link>
        )}
        {!authenticated && <Link href={"/login"}>Login</Link>}
        {!authenticated && <Link href={"/signup"}>Signup</Link>}
        {authenticated && <Link href={"/logout"}>Logout</Link>}
      </div>
    </nav>
  );
};
