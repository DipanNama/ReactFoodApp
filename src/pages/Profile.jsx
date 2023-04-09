import React from 'react'
import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const mainStyle = {
      height : "55vh",

    }
    const style = {
        textAlign : "center",
        color : "red"
    }
    const profileStyle = {
      position: "absolute",
      top : "35%",
      left : "50%",
      height : "200px",
      width : "200px",
      borderRadius : "50%",
      transform : "translate(-50%, -50%)",

    }
    const btnStyle = {
        position: "absolute",
        top : "50%",
        left : "50%",
        transform : "translate(-50%, -50%)",
        padding : "10px 20px",
        outline : "none",
        background : "dodgerBlue",
        border : "none",
        color : "white",
        fontWeight : "900",
        fontSize : "bolder",

    }
    const navigate = useNavigate();
    const userName = localStorage.getItem('Name');
    const handleLogout =() => {
      auth.signOut();
      navigate("/login")
      localStorage.clear();
      }
  return (
    <div style={mainStyle}>
    <h1 style={style}>Welcome to your profile</h1>
    <h1 style={style}>{userName}</h1>
    <img style={profileStyle} src='https://xsgames.co/randomusers/avatar.php?g=male' alt='user'></img>
    <button style={btnStyle} onClick={() => {handleLogout()}}>Logout</button>
    </div>
  )
}

export default Profile