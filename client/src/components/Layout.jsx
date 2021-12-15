import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import "../assets/css/Layout.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import SignIn from '../screens/SignIn';
// import SignUp from '../screens/SignUp';

export default function Layout(props) {
  const { currentUser, handleLogout, setLoginOpen, setRegisterOpen } = props;
  return (
    <div>
      {currentUser ? (
        <div className="welcome">
          <nav>
            <h1 className="welcome-logo">what is your story?</h1>
            <div className="nav">
              <Link to={`/saved/${currentUser.username}`}>
                <AccountCircleIcon />
              </Link>
              <Link to="/topics" className="discover-link">
                discover
              </Link>

              <button className="logout-button" onClick={handleLogout}>
                logout
              </button>
            </div>
          </nav>
        </div>
      ) : (
        <div>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setLoginOpen(true);
            }}
          >
            sign in |{" "}
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setRegisterOpen(true);
            }}
          >
            sign up{" "}
          </a>
        </div>
      )}
      {/* {currentUser ? (
        <nav>
          <Link to="/topics">topics</Link>
          <Link to={`/saved/${currentUser.username}`}>saved</Link>
        </nav>
      ) : null} */}
      {props.children}
      <Footer />
    </div>
  );
}
