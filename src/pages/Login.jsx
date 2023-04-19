import React from "react";
import { login } from "../features/AuthSlice";
import * as yup from "yup";
import { Field, Form, FormikProvider, useFormik, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { LoginSocialGoogle } from "reactjs-social-login";
import { GoogleLoginButton } from "react-social-login-buttons";

const REGEX = {
  EMAIL:
    /^(?=.{1,80}$)([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,})+$/,
  PASSWORD: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
};

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .matches(REGEX.EMAIL, "Invalid email")
    .required("Email is required"),
  password: yup
    .string()
    .matches(REGEX.PASSWORD, "Invalid Password")
    .required("Password is required"),
});

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { email: "ds@getnada.com", password: "Admin@123" },
    validationSchema,
    onSubmit: (data) => {
      dispatch(login());
      navigate("/");
    },
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
          <div className="card border-0 shadow rounded-3 my-5">
            <div className="card-body p-4 p-sm-5">
              <h5 className="card-title text-center mb-5 fw-light fs-5">
                Sign In
              </h5>
              <FormikProvider value={formik}>
                <Form
                  autoComplete="off"
                  noValidate
                  onSubmit={formik.handleSubmit}
                >
                  <div className="form-floating mb-3">
                    <Field
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="name@example.com"
                    />
                    <label for="floatingInput">Email address</label>
                    <ErrorMessage
                      component="p"
                      name="email"
                      className="text-danger"
                    />
                  </div>
                  <div className="form-floating mb-3">
                    <Field
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                    />
                    <label for="floatingPassword">Password</label>
                    <ErrorMessage
                      component="p"
                      name="password"
                      className="text-danger"
                    />
                  </div>

                  <div className="d-grid">
                    <button
                      className="btn btn-primary btn-login text-uppercase fw-bold"
                      type="submit"
                    >
                      Sign in
                    </button>
                  </div>
                  <hr className="my-4" />
                  <div className="d-grid mb-2">
                    <LoginSocialGoogle
                      client_id={process.env.REACT_APP_GG_APP_ID || ""}
                      scope="openid profile email"
                      discoveryDocs="claims_supported"
                      onResolve={({ provider, data }) => {
                        dispatch(login());
                        navigate("/");
                      }}
                      onReject={(err) => {
                        console.log(err);
                      }}
                    >
                      <GoogleLoginButton />
                    </LoginSocialGoogle>
                  </div>
                </Form>
              </FormikProvider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
