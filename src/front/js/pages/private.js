import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams, Redirect } from "react-router-dom";
import { Context } from "../store/appContext";

export const Private = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  useEffect(() => {
    console.log(store.loged);
  }, [store.loged]);
  useEffect(() => {
    let token = window.sessionStorage.getItem("token");
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://3001-4geeksacade-reactflaskh-aohgolkzijh.ws-us43.gitpod.io/autenticacion",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        setEmail(result);
        console.log(store.loged);
        actions.loginTrue();
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <h1>
      Tu correo es {email}, store loged = {store.loged}
    </h1>
  );
};
