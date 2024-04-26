import { useState } from "react"
import { Login } from "../components/Login"
import { Register } from "../components/Register"
import './auth.css'

export const Auth = ()=>{
    const [isLogin, setIsLogin] = useState(true)
    const handlerOutPageToggle=()=>{
        setIsLogin((prev) => !prev)
    }


    return(
        <div className="auth-container">
            {isLogin ? (<Login switchAuthHandler={handlerOutPageToggle}/>
            ) : (<Register switchAuthHandler ={handlerOutPageToggle}/>)}
        </div>
    )
}