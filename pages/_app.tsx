import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";
import { authenticateUser } from "../auth";
import { getUsernameFromCookie } from "../util";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash, faSearch } from "@fortawesome/free-solid-svg-icons";
library.add(faEye, faEyeSlash);
function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const user = getUsernameFromCookie(); // check for cookie
    if (user) authenticateUser();
    setLoading(false);
  }, []);

  if (loading) return <p>Loading...</p>;
  return <Component {...pageProps} />;
}

export default MyApp;
