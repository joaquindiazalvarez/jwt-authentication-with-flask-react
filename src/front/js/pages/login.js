import React, { useState, useEffect, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [form, setForm] = useState();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    actions.login(form);
  };
  const onChangeEmail = (e) => {
    setForm({ ...form, email: e.target.value });
  };
  const onChangePassword = (e) => {
    setForm({ ...form, password: e.target.value });
  };
  useEffect(() => {
    if (store.loged === true) {
      history.push("/private_page");
    }
  }, [store.loged]);

  return (
    <div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                onChange={onChangeEmail}
              ></input>
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                onChange={onChangePassword}
              ></input>
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};
