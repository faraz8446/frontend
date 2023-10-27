import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState, style } from "react";
import { useHistory } from "react-router-dom";
import { auth, provider, db } from "../../firebase";
import { ref, set } from "firebase/database";
import "./index.css";
import swal from "sweetalert";
import { Link } from "react-router-dom";
import { mergeClasses } from "@material-ui/styles";
import { CallMissedSharp } from "@material-ui/icons";

function Index() {
  const history = useHistory();
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const [lname, setLname] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function validateEmail(email) {
    const reg = /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/;
    if (reg.test(email) === false) {
      return false;
    } else return true;
  }

  const handleGoogleSignIN = () => {
    setLoading(true);
    signInWithPopup(auth, provider)
      .then((res) => {
        swal(
          "You are logged in successfully!",
          "Welcome to AskBUETK ",
          "success"
        );
        setLoading(false);
        // console.log(res);

        history.push("/");
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        swal(
          "You are logged in successfully!",
          "Welcome to AskBUETK ",
          "success"
        );
        history.push("/");
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.code);
        setError(error.message);
        setLoading(false);
      });
  };

  const handleRegister = () => {
    setError("");
    setLoading(false);
    if (email === "" || password === "" || username === "") {
      setError("Required field is missing.");
      setLoading(false);
    } else if (!validateEmail(email)) {
      setError("Email is malformed");
      setLoading(false);
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((res) => {
          let user = {
            email: res.user.email,
            password: password,
            fname: username,
            lname: lname,
          };
          set(ref(db, "usersList/" + res.user.uid), user).then((res) => {
            console.log(res);
            swal(
              "You are logged in successfully!",
              "Welcome to AskBUETK ",
              "success"
            );
            history.push("/");
          });

          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setError(error.message);
          setLoading(false);
        });
    }
  };
  return (
    <div className="auth">
      <div className="intro-hostel">
        <p>To add hostel and food points contact us</p>
        <Link to="/hostelcontact">
          <button
            style={{
              marginLeft: "20px",
              marginTop: "-15px",
              height: "4ch",
              paddingTop: "2px",
            }}
          >
            Contact us
          </button>
        </Link>
      </div>
      <div className="intro">
        <div>
          <h1>AskBUETK</h1>
          <p>
            University Students whether freshmen or seniors face many problems
            <br />
            in their university journey. They face problems related to
            <br />
            admissions, exams, teachers, courses and so on. Another problem
            <br />
            theyface is hostel accomodation as many students come from far
            <br />
            places. Finding related documents to their cources is another big
            <br />
            challenge for students. Selection a career path and interaction with
            <br />
            seniors and alumni is also difficult for students.
          </p>
          <h1>Why AskBUETK</h1>
          <p>
            There is no specific platform for students where they can get their
            <br />
            queries resolved and find out all their related stuff at one place
            <br />
            is a dream for students. AskBUETK provides them this platform.
          </p>
          <h1>What AskBUETK Provides</h1>
          <p>
            A web based one stop solution for students. Students ask their
            <br />
            queries and other students answer them, comment on them.
            <br />
            Students add study materials and also download them. Blog portion
            <br />
            where alumni can share their experiences and add about job,
            <br />
            internships, scholarships etc. Hostel management add hostel details.
          </p>
        </div>
      </div>
      <div className="auth-container">
        <p className="color">Welcome to AskBUETK </p>
        <div className="sign-options">
          <div onClick={handleGoogleSignIN} className="single-option">
            <image
              alt="google"
              src="https://content.stocktrak.com/wp-content/uploads/2016/10/google-logo.png"
            />
            <p>{loading ? "Signing in..." : "Login with Google"}</p>
          </div>
          <div className="single-option">
            <image
              alt="github"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            />
            <p>Login with Github</p>
          </div>
          <div className="single-option">
            <image
              alt="facebook"
              src="https://1000logos.net/wp-content/uploads/2016/11/fb-logo.jpg"
            />
            <p>Login with Facebook</p>
          </div>
        </div>
        <div className="auth-login">
          <div className="auth-login-container">
            {register ? (
              <>
                {" "}
                <div className="input-field">
                  <p>Enter first name</p>
                  <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="input-field">
                  <p>Enter last name</p>
                  <input
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="input-field">
                  <p>Enter Email</p>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="text"
                  />
                </div>
                <div className="input-field">
                  <p>Enter Password</p>
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />
                </div>
                <button
                  onClick={handleRegister}
                  disabled={loading}
                  style={{
                    marginTop: "10px",
                    marginLeft: "100px",
                    border: "white",
                    width: "100px",
                  }}
                >
                  {loading ? "Registering..." : "Register"}
                </button>
              </>
            ) : (
              <div
                className="container alignment d-flex"
                style={{ marginLeft: "10px" }}
              >
                <div className="card">
                  <div>
                    <h5 className="header-text my-3 text-center fw-bolder">
                      Login To AskBUETK
                    </h5>
                  </div>

                  <div>
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      className="form-control w-100"
                      type="text"
                      id="email"
                      name="email"
                      onChange={(event) => setEmail(event.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="password" className=" form-label ">
                      Password
                    </label>
                    <input
                      className="form-control w-100"
                      type="password"
                      id="password"
                      name="password"
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>

                  <div className="d-flex flex-row justify-content-center align-items-center">
                    <button
                      className="text-light mt-5 sign-in-button"
                      onClick={handleSignIn}
                    >
                      Login
                    </button>
                  </div>
                </div>
              </div>
            )}
            <p
              onClick={() => setRegister(!register)}
              style={{
                marginTop: "10px",
                textAlign: "center",
                color: "#0095ff",
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              {register ? "Login" : "Register"} ?
            </p>
          </div>
        </div>

        {error !== "" && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
            }}
          >
            {error}
          </p>
        )}
      </div>
    </div>
  );
}

export default Index;
