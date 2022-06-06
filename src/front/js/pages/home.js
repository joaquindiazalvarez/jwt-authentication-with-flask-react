import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="text-center mt-5">
      <h1>Bienvenido!</h1>
      <p></p>
      <Link to="/SignUp">
        <button type="button" className="btn btn-primary">
          Registrarse
        </button>
      </Link>
      <Link to="/Login">
        <button type="button" className="btn btn-primary">
          Ingresar
        </button>
      </Link>

      {/* <p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
					Read documentation
				</a>
			</p> */}
    </div>
  );
};
