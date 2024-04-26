import { useState } from "react";
import { logout as logoutHandler } from "./userLogout";

const getUserDetails = () => {
    const userDetails = localStorage.getItem('user');
    if (userDetails) {
        return JSON.parse(userDetails);
    }
    return null
}

export const userDetails = () => {
    const [userDetails, setUserDetails] = useState(getUserDetails())

    const logout = () => {
        logoutHandler()
    }

    return{
        islogged: Boolean(useUserDetails),
        username: userDetails?.username ?  userDetails?.username:'Guest',
        logout,
    }
}