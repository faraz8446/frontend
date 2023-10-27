import React, { useState, style, useEffect } from "react";
import { NavDropdown } from "react-bootstrap";
import "./ourheader.css";
import swal from "sweetalert";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, provider, db } from "../../../firebase";
import { ref, set, get, child } from "firebase/database";
import { useSelector } from "react-redux";
import { selectUser } from "../../../feature/userSlice";
import mylogo from "../../../img/Logo.png";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";

function Header() {
  const user = useSelector(selectUser);

  const history = useHistory();
  const [loading, setLoading] = useState(false);

  const SignOut = () => {
    auth.signOut();
    swal("Your are logged out successfully!", " ", "success", { timer: 2000 });
    history.push("/auth");
  };
  const Register = () => {
    history.push("/auth");
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

  const [users, setUsers] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (userdata) => {
      // console.log(userData)
      if (userdata) {
        // axios.get('https://askcui-985f2-default-rtdb.firebaseio.com/hostelList/'+userdata.uid+'.json')
        // .then((resp)=>{
        //   console.log(resp)
        //   return resp.data

        // })
        const dbref = ref(db);
        get(child(dbref, `usersList/${userdata.uid}`)).then((snapshot) => {
          console.log(snapshot.val());
          let data = snapshot.val();
          // let userData=[]

          // for(let key in data){
          //     userData.push({...data[key], id:key,uid:userdata.uid})
          //   }

          setUsers(data);
        });
        // alert("login successful")
      } else {
        // alert("logout successful")
      }
    });
  }, []);

  return (
    <header>
      <div className="header-container1">
        <div className="header-left">
          <Link to="/">
            <img width="150" height="65" src={mylogo} alt="logo" />
          </Link>
        </div>
        <div className="header-middle"></div>
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
        {/* <Link className="authent" onClick={handleGoogleSignIN}>
          <h6>{loading ? "LOGIN" : "LOGIN"}</h6>
        </Link> */}
        {/* {user ? ( */}
        {/* <div className="header-right">
          <div className="header-right-container">
            {window.innerWidth < 768 && <SearchIcon />}
            <span onClick={SignOut}>
              <Avatar
                src={user?.photo}
                style={{
                  cursor: "pointer",
                }}
                {...stringAvatar(user && user.displayName)}
                //onClick={() => auth.signOut()}
                // onClick={SignOut}
              />
            </span>
          </div>
        </div> */}
        <NavDropdown
          title={
            <Avatar
              src={user?.photo}
              style={{
                cursor: "pointer",
                marginTop: "15px",
              }}
            />
          }
          id="collasible-nav-dropdown"
          style={{
            marginRight: "10px",
            fontWeight: "bold",
            color: "white",
          }}
        >
          <div
            style={{
              marginLeft: "40px",
              marginTop: "20px",
              fontWeight: "lighter",
            }}
          >
            My profile
            <div className="header-right">
              <div
                className="header-right-container"
                style={{ marginLeft: "9px" }}
              >
                {window.innerWidth < 768 && <SearchIcon />}
                {/* <span onClick={SignOut}> */}
                <Avatar
                  src={user?.photo}
                  style={{
                    cursor: "pointer",
                  }}
                  // {...stringAvatar(user && user.displayName)}
                  //onClick={() => auth.signOut()}
                  // onClick={SignOut}
                />
                {/* </span> */}
              </div>
            </div>
          </div>
          <div>{/* <p style={{ marginLeft: "18px" }}>{users.fname}</p> */}</div>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/myprofile">
            <p> My Profile</p>
          </NavDropdown.Item>
          <NavDropdown.Item href="/register">
            <p> Register</p>
          </NavDropdown.Item>
          <NavDropdown.Item href="/auth">
            <p>Landing page</p>
          </NavDropdown.Item>
          <NavDropdown.Item href="/hostelcontact">
            <p>Hostel Contact</p>
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <div onClick={SignOut} style={{ marginLeft: "40px" }}>
            <button>Logout</button>
          </div>
        </NavDropdown>

        {/* ) : (
          <Link onClick={Register} className="authent">
            <h6>REGISTER</h6>
          </Link>
        )} */}
      </div>
    </header>
  );
}

export default Header;
