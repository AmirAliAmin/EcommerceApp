import { createContext, useEffect, useState } from "react";


export const AuthContext = createContext()

const AuthContextProvider = ({children})=>{
    const [user, setUser] = useState(null);
    useEffect(()=>{
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    },[])

    const login = (userObj)=>{
        setUser(userObj);
        localStorage.setItem("user", JSON.stringify(userObj))
    }
    const logout = ()=>{
        setUser(null);
        localStorage.removeItem("user")
    }
    const value ={
        user,setUser,
        login,logout

    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;