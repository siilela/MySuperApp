import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../features/userSlice";
import "../style.css";
import Countries from "./Contries";

const Logout = () => {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="logout">
      <div>
        <h1>
          Welcome <span className="user__name">{user.name}</span>
        </h1>
      </div>
      <div className="countries">
        <Countries />
      </div>
      <button className="logout__button" onClick={(e) => handleLogout(e)}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
