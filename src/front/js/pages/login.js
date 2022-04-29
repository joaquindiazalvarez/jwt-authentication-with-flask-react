import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();
  function login(email, password) {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      email: email,
      password: password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    fetch(
      "https://3001-4geeksacade-reactflaskh-aohgolkzijh.ws-us43.gitpod.io/user/login",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        window.sessionStorage.setItem("token", result["token"]);
        actions.loginTrue();
        history.push("/private");
      })
      .catch((error) => console.log("error", error));
  }

  return (
    <div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <form>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => login(email, password)}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};
