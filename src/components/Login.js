import { useState, useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Col, Form, FormControl, FormLabel, Row } from 'react-bootstrap';
import Context from '../Context/Context';

function Login() {
  let {} = useContext(Context)
  let navigate = useNavigate()

  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")

  function submitForm(e){
    e.preventDefault()
    console.log("submitting log in form with:", username, password)
  }

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <main className="container-auth text-center">
        <Form noValidate onSubmit={submitForm}>
          <i className="bi bi-file-lock-fill auth-icon my-4"/>  
          <p className="mb-3 fw-normal">
            Fill up the form and then click <strong>Log In</strong> button to log in.
          </p>
          <Form.Group className="form-floating" controlId="inputUsername">
            <FormControl type="text"
                         className="form-control form-input-top"
                         placeholder="Username"
                         value={username}
                         onChange={(e) => setUsername(e.target.value)}
            />
            <FormLabel>Username</FormLabel>
          </Form.Group>
          <Form.Group className="form-floating" controlId="inputPassword">
            <FormControl type="password"
                         className="form-control form-input-bottom"
                         placeholder="Password"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
            />
            <FormLabel>Password</FormLabel>
          </Form.Group>
          <div>
          </div>
          <Form.Group as={Row} className="my-3" controlId="isRemember">
            <Col sm={{ span: 8, offset: 3 }} className="text-md-start">
              <Form.Check label="Remember me"/>
            </Col>
          </Form.Group>
          <div className="row mb-3">
            <div className="col-6"><Link to="/forgot">Forgot password</Link></div>
            <div className="col-6"><Link to="/register">Create an account</Link></div>
          </div>
          <Button className="w-100 btn btn-lg btn-primary"
                  type="submit"
          >
            <span className="px-2">Log in</span>
          </Button>
        </Form>
      </main>
    </>
  );
}

export default Login;
