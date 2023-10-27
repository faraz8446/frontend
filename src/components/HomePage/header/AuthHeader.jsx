import React, { useState, style } from "react";
import "./ourheader.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
// import Avatar from "@mui/material/Avatar";
import { useHistory } from "react-router-dom";
import InboxIcon from "@material-ui/icons/Inbox";
import HelpIcon from "@material-ui/icons/Help";
import { Link } from "react-router-dom";
import { auth, provider } from "../../../firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../../feature/userSlice";
import mylogo from "../../../img/Logo.png";
import { signInWithPopup } from "firebase/auth";
//import Button from "../../UI/Button";

function AuthHeader() {
  const user = useSelector(selectUser);
  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const SignOut = () => {
    auth.signOut();
    history.push("/auth");
  };
  const Register = () => {
    history.push("/register");
  };
  const handleGoogleSignIN = () => {
    setLoading(true);

    signInWithPopup(auth, provider)
      .then((res) => {
        setLoading(false);

        history.push("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.substr(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: name ? stringToColor(name) : "rgba(255,255,255,0.8)",
      },
      children: name && `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <header>
      <div className="header-container-auth">
        <div className="header-left">
          <Link to="/">
            <img width="150" height="65" src={mylogo} alt="logo" />
          </Link>
          {/* <a href="/">
            
          </a> */}
        </div>
        <div className="header-middle">
          {/* <div className="header-search-container"> */}
          {/* <SearchIcon /> */}
          {/* <input type="text" placeholder="Search..." /> */}
          {/* </div> */}
        </div>
        <Link className="link" to="/home">
          <h6>HOME</h6>
        </Link>
        <Link className="link" to="/ourhome">
          <h6>BLOGS</h6>
        </Link>
        <Link className="link" to="/ask">
          <h6>ASK</h6>
        </Link>
        <Link className="link" to="/docs">
          <h6>DOCUMENTS</h6>
        </Link>
        <Link className="link" to="/hostel">
          <h6>HOSTELS</h6>
        </Link>
        <Link className="link" to="/food">
          <h6>FOOD</h6>
        </Link>
        <Link className="link" to="/about">
          <h6>ABOUT</h6>
        </Link>
        <Link className="authent" onClick={handleGoogleSignIN}>
          <h6>{loading ? "LOGIN" : "LOGIN"}</h6>
        </Link>

        <Link onClick={Register} className="authent">
          <h6>REGISTER</h6>
        </Link>
        {/* )} */}
      </div>
    </header>
  );
}

export default AuthHeader;
