import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {login} from "../features/userSlice"
import "../style.css";
// import {LoginForm} from './StyledComponents';

const Login = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch=useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      login({
        name: name,
        email:email,
        password:password,
        loggedIn:true,
      })
    )

  }

  return (
    <div className="login">
      <form className="login__form" onSubmit={(e)=> handleSubmit(e)}>
        <h1>LOGIN HERE &#128512; &#128516;</h1>
       

        <input type="name" className="" placeholder="Name" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="email" className="" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input
          type="password"
          className=""
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        {/* </LoginForm> */}
        <button type="submit" className="submit__btn">Submit</button>
      </form>
    </div>
  );
};

export default Login;
