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
