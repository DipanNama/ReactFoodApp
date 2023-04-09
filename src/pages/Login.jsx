import React, { useRef, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link,useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, values.email, values.pass).then((res) => {
      console.log(res)
      navigate("/");
    })
      .catch((err) => {
        console.log(err)
      })
  };

  return (
    <Helmet title="Login">
      <CommonSection title="Login" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                    // value={email}
                    onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={loginPasswordRef}
                    // value={password}
                    onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Login
                </button>
              </form>
              <Link to="/register">
                Don't have an account? Create an account
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;
