import React, { useState, useEffect } from "react";
import { MDBCol, MDBInput, MDBRow } from "mdb-react-ui-kit";
import Layout from "../components/Layout";
import useAuth from "../auth/context";
import { useRouter } from "next/router";

const Login = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const router = useRouter();
  const { login, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  const handleChange = (name) => (e) => {
    setValues({ ...values, [name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    login(values.username, values.password);
  };

  return (
    <Layout>
      <MDBRow className="login-row">
        <MDBCol lg="6" className="login-img px-0">
          <img className="w-100" src="/images/home.jpeg"></img>
        </MDBCol>
        <MDBCol lg="6" md="6" className="d-flex row align-items-center px-2 mx-auto">
          <form onSubmit={onSubmit}>
            <p className="h4 text-center my-4 font-weight-bolder text-night">
              Connexion
            </p>
            <div className="text-night">
              <MDBInput
                label="Votre identifiant"
                type="text"
                className="form-control"
                onChange={handleChange("username")}
                name="username"
              />
              <br />
              <MDBInput
                label="Votre mot de passe"
                type="password"
                name="password"
                className="form-control"
                onChange={handleChange("password")}
              />
            </div>
            <div className="text-center mt-4 mx-auto mb-4">
              <button type="submit" className="btn-block smBtn">
                Connexion
              </button>
            </div>
          </form>
        </MDBCol>
      </MDBRow>
    </Layout>
  );
};

export default Login;
