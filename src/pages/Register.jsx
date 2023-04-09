import React, { useRef, useState } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link,useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"

const Register = () => {
  const signupNameRef = useRef();
  const signupPasswordRef = useRef();
  const signupEmailRef = useRef();

  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
});

const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, values.email, values.pass).then((res) => {
      console.log(res)
      navigate("/");
    })
    .catch((err) => {
      console.log(err)
    })
  };

  return (
    <Helmet title="Signup">
      <CommonSection title="Signup" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full name"
                    required
                    ref={signupNameRef}
                    // value={fullname}
                    onChange={(event) => setValues((prev) => ({ ...prev, name: event.target.value }))}/>
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={signupEmailRef}
                    // value={email}
                    onChange={(event) => setValues((prev) => ({ ...prev, email: event.target.value }))}/>
                </div>
                <div className="form__group">
                  <input
                    type="password"
                    placeholder="Password"
                    required
                    ref={signupPasswordRef}
                    // value={password}
                    onChange={(event) => setValues((prev) => ({ ...prev, pass: event.target.value }))}/>
                </div>
                <button type="submit" className="addTOCart__btn">
                  Sign Up
                </button>
              </form>
              <Link to="/login">Already have an account? Login</Link>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Register;
