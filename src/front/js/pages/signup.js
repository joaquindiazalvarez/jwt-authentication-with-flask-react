import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

export const SignUp = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  const [emailSent, changeEmail] = useState();
  const [passwordSent, changePassword] = useState();
  const [confirmSent, changeConfirm] = useState();
  const [confirmWrong, setConfirmWrong] = useState(false);

  return (
    <div>
      <div className="row">
        <div className="col-3"></div>
        <div className="col-6">
          <section className="vh-100" style={{ backgroundColor: "#eee" }}>
            <div className="container h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                  <div
                    className="card text-black"
                    style={{ borderRadius: "25px" }}
                  >
                    <div className="card-body p-md-5">
                      <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                          <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                            Sign up
                          </p>

                          <form className="mx-1 mx-md-4">
                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="email submit"
                                  id="form3Example3c"
                                  className="form-control"
                                  onChange={(e) => changeEmail(e.target.value)}
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example3c"
                                >
                                  Your Email
                                </label>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="password submit"
                                  id="form3Example4c"
                                  className="form-control"
                                  onChange={(e) =>
                                    changePassword(e.target.value)
                                  }
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example4c"
                                >
                                  Password
                                </label>
                              </div>
                            </div>

                            <div className="d-flex flex-row align-items-center mb-4">
                              <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                              <div className="form-outline flex-fill mb-0">
                                <input
                                  type="password submit"
                                  id="form3Example4cd"
                                  className="form-control"
                                  onChange={(e) =>
                                    changeConfirm(e.target.value)
                                  }
                                />
                                <label
                                  className="form-label"
                                  htmlFor="form3Example4cd"
                                >
                                  Repeat your password
                                </label>
                              </div>
                            </div>

                            <div className="form-check d-flex justify-content-center mb-5">
                              <input
                                className="form-check-input me-2"
                                type="checkbox"
                                value=""
                                id="form2Example3c"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="form2Example3"
                              >
                                I agree all statements in{" "}
                                <a href="#!">Terms of service</a>
                              </label>
                            </div>

                            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                              <button
                                type="submit"
                                className="btn btn-primary btn-lg"
                                onSubmit={() => {
                                  if (passwordSent === confirmSent) {
                                    setConfirmWrong(false);
                                    actions.register(emailSent, passwordSent);
                                  } else {
                                    setConfirmWrong(true);
                                  }
                                }}
                              >
                                Register
                              </button>
                            </div>
                          </form>
                        </div>
                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                          <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                            className="img-fluid"
                            alt="Sample image"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="col-3"></div>
      </div>
    </div>
  );
};
