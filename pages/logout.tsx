import { NextPage } from "next"
import  Router  from "next/router"
import { useEffect } from "react"
import { unauthenticateUser } from "../auth"
import { logoutUser } from "../util"

const Logout: NextPage = () => {
    useEffect(()=>{
        // logs the user out and redirects to home page
        logoutUser()
        unauthenticateUser()
        Router.push('/')
      })
    return(
        <>
            <p>Logging out...</p>
        </>
    )
}

export default Logout