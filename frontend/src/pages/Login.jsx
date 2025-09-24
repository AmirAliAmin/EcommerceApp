import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [currentState, setCurrentState] = useState("Sign Up");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const {login} = useContext(AuthContext)

  const navigate = useNavigate()

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (currentState === "Sign Up") {
      let users = JSON.parse(localStorage.getItem("users")) || [];
      const existingUser = users.find((u)=>u.email === email)
      if (existingUser) {
        toast.error("Email Already exists")
        return ;
      }
      const newUser = {name, password, email, role};
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      toast.success("Sign Up Successfully")
      setCurrentState("Login");
      setEmail("");
      setPassword("");
      setRole("user");
    }else{
      let users = JSON.parse(localStorage.getItem("users")) || [];
      const validUser = users.find((u)=> u.email === email && u.password === password);
      if (validUser) {
        login(validUser)
        if (validUser.role === "admin") {
          navigate("/admin")
        }else{
          navigate("/")
        }
      }else{
        toast.error("Invalid User or Password")
      }
    }
  };
  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl ">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Login" ? (
        ""
      ) : (
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          name="name"
          id="name"
          required
        />
      )}
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        id="email"
        name="email"
        required
      />
      <input
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forget Password?</p>
        {currentState === "Login" ? (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Sign Up")}
          >
            Create an Account?
          </p>
        ) : (
          <p
            className="cursor-pointer"
            onClick={() => setCurrentState("Login")}
          >
            Login Here
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
}
