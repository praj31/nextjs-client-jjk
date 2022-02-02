import { NextPage } from "next";
import Router from "next/router";
import { useEffect, useState } from "react";
import { isAuthenticated } from "../auth";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Profile.module.css";
import { getUsernameFromCookie } from "../util";

const Profile: NextPage = () => {
  const authenticated: boolean = isAuthenticated();
  const [loading, setLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    if (!authenticated) {
      Router.push("/login");
    }
    const usernameFromCookie = getUsernameFromCookie();
    setUsername(usernameFromCookie);

    setLoading(false);
  }, [authenticated]);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      <Navbar />
      <section>
        <div className={styles.post_container}>
          <div className={styles.post_wrapper}>
            <div className={styles.post_heading}>
              <div className={styles.post_profile}></div>
              <div className={styles.post_profile_info}>
                <div className={styles.post_profile_username}>
                  <h3>{username}</h3>
                  <button>Edit Profile</button>
                </div>
                <div className={styles.post_profile_post}>
                  <p>
                    {" "}
                    <strong>1</strong> Post
                  </p>
                  <p>
                    {" "}
                    <strong>5</strong> Likes
                  </p>
                  <p>
                    {" "}
                    <strong>9</strong> Comments
                  </p>
                </div>
                <div className={styles.post_profile_bio}>
                  <p>Bio.</p>
                  <p>Learner.</p>
                </div>
              </div>
            </div>
            <p className={styles.post_content}>
              Posts
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
