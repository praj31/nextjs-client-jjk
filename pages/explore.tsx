import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NextPage } from "next";
import Link from "next/link";
import Router from "next/router";
import { useEffect, useState } from "react";
import { isAuthenticated } from "../auth";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Explore.module.css";
import { getUsernameFromCookie } from "../util";

const Explore: NextPage = () => {
  const authenticated: boolean = isAuthenticated();
  const [loading, setLoading] = useState<boolean>(true);
  const [tabs, setTabs] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    if (!authenticated) {
      Router.push("/login");
    }
    const usernameFromCookie = getUsernameFromCookie();
    setUsername(usernameFromCookie);

    setLoading(false);
  }, [authenticated]);

  if (loading) return <p>Loading...</p>;

  let handleTab = () => {
    setTabs(!tabs);
  };
  return (
    <>
      <Navbar />
      <section className={styles.explore_wrapper}>
        <div className={styles.explore_actions}>
          <div className={styles.explore_tabs}>
            <Link href="#">
              <a
                onClick={handleTab}
                className={
                  tabs ? styles.explore_tabs_active : styles.explore_tabs_a
                }
              >
                Accounts
              </a>
            </Link>
            <Link href="#">
              <a
                onClick={handleTab}
                className={
                  tabs ? styles.explore_tabs_a : styles.explore_tabs_active
                }
              >
                Posts
              </a>
            </Link>
          </div>
          <div className={styles.explore_search}>
            <form>
              <fieldset>
                <input
                  value={search}
                  placeholder="Search"
                  type="text"
                  className={styles.input_area}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </fieldset>
            </form>
            
          </div>
        </div>

        <div className={styles.explore_content}>
          {tabs ? <p>Account</p> : <p>Posts</p>}
        </div>
      </section>
    </>
  );
};

export default Explore;
