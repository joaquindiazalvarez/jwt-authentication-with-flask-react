import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const [loged, setLoged] = useState(store.loged);
  useEffect(() => {
    setLoged(store.loged);
  }, [store.loged]);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">Home</span>
        </Link>
        <div className="ml-auto">
          <Link to="/">
            <button className="btn btn-primary">
              {loged ? "Logout" : "login"}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
