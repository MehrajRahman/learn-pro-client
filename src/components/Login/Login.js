import React, { useContext } from "react";
import { UserContext } from "../../App";
import firebaseConfig from "./firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
import "./Login.css";
import { useHistory, useLocation } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { ...loggedInUser };
        signedInUser.name = displayName;
        signedInUser.email = email;
        signedInUser.image = photoURL;

        setLoggedInUser(signedInUser);
        storeAuthToken();
      })
      .catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {
        // Handle error
      });
  };
  return (
    <div className="login-body">
      
        {/* <h1>This is Login</h1>
        <button onClick={handleGoogleSignIn}>Google Sign in</button>
      </div> */}
        {/*Adding new lines*/}
        <div class="container">
          <div class="row">
            <button
              onClick={handleGoogleSignIn}
              class="btn btn-lg btn-google btn-block text-uppercase"
              type="submit"
            >
              <FontAwesomeIcon className="icon" icon={faGoogle} />
              Sign in with Google
            </button>
           </div> 
    </div>
    </div>
  );
};

export default Login;
