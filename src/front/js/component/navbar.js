import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [token, setToken] = useState();
  const history = useHistory();
  useEffect(() => {
    setToken(sessionStorage.getItem("token"));
  }, [store.loged]);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Home</span>
        </Link>
        <div className="ml-auto">
          {token && (
            <button
              className="btn btn-primary"
              onClick={() => {
                actions.logout();
                history.push("/");
              }}
            >
              Logout
            </button>
          )}
          {!token && (
            <button
              className="btn btn-primary"
              onClick={() => history.push("/login")}
            >
              Log in
            </button>
          )}
          {token && (
            <button
              className="btn btn-primary"
              onClick={() => history.push("/private_page")}
            >
              Private
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
