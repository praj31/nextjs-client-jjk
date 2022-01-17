import { NextPage } from "next";
import Router from "next/router";
import { useEffect, useState } from "react";
import { Navbar } from "../components/Navbar";
import { isAuthenticated } from "../auth";
import { getUsernameFromCookie } from "../util";

const ProtectedRoute: NextPage = () => {
  const authenticated: boolean = isAuthenticated();
  const [loading, setLoading] = useState<boolean>(true);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    // if user is not authenticated, redirect to login page
    if (!authenticated) {
      Router.push("/login");
    }

    const usernameFromCookie = getUsernameFromCookie();
    setUsername(usernameFromCookie);
    
    if(Router.query.username !== usernameFromCookie){
      Router.push('/');
    }

    setLoading(false);
  }, [authenticated]);


  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <p>This is a protected route. Your username is: {username}</p>
    </>
  );
};

export default ProtectedRoute;
// if user is logged in then -> Create Post, Explore, Profile and Logout
// if user is !logged in then -> Login and Signup
// Create Post -> CHAR(255) text post
// Explore -> explore accounts or posts (tabs) each with a searchbar. 
// can search accounts using username, can search post using just text in it