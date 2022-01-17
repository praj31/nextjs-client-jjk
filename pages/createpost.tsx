import { NextPage } from "next";
import Router from "next/router";
import { useEffect, useState } from "react";
import { isAuthenticated } from "../auth";
import { Navbar } from "../components/Navbar";
import styles from "../styles/Createpost.module.css";
import { getUsernameFromCookie } from "../util";

const CreatePost: NextPage = () => {
    const authenticated: boolean = isAuthenticated();
    const [loading, setLoading] = useState<boolean>(true);
    const [username, setUsername] = useState<string>("");
  
    useEffect(() => {  
      const usernameFromCookie = getUsernameFromCookie();
      setUsername(usernameFromCookie);
      
      setLoading(false);
    }, [authenticated]);
  
  
    if (loading) return <p>Loading...</p>;
  return (
    <>
    <Navbar />
      <section >
        <div className={styles.post_container}>
          <div className={styles.post_wrapper}>
            <div className={styles.post_heading}>
              <div>PFP</div>
              <h4>{username}</h4>
            </div>
            <textarea
              className={styles.post_content}
              placeholder="What's cooking in Shibuya?"
              max-length="50"
              rows={5}
              cols={10}
            ></textarea>
              <button className={styles.post_button}>Post</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default CreatePost;
