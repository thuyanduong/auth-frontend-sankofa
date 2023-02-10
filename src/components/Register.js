import { Helmet } from 'react-helmet';
import { Col, Button, Form, FormControl, InputGroup, FormLabel } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import Context from '../Context/Context';

function Register() {
  let {} = useContext(Context)
  let navigate = useNavigate()

  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")
  let [bio, setBio] = useState("")

  function submitForm(e){
    console.log("submitting register form with: ", username, password, bio)
  }

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <main className="container-signup">
        <Form className="row g-2" noValidate onSubmit={submitForm}>
          <i className="bi bi-file-lock-fill auth-icon mt-3 text-center"/>
          <p className="fw-normal text-center">Fill up the form and then click the <strong>Register</strong> button to create an acount.</p>
          <Form.Group as={Col} md="12" controlId="inputUsername">
            <Form.Label>Username</Form.Label>
            <InputGroup hasValidation>
              <Form.Control type="text"
                            placeholder="Username"
                            aria-describedby="inputGroupPrepend"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} lg="12" controlId="inputPassword">
            <FormLabel>Password</FormLabel>
            <FormControl type="password"
                         placeholder="Password"
                         value={password}
                         onChange={(e) => setPassword(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} lg="12" controlId="inputEmail">
            <FormLabel>Bio</FormLabel>
            <FormControl type="text"
                         placeholder="Tell us about yourself!"
                         value={bio}
                         onChange={(e) => setBio(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="my-3">
            <Form.Check
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
              feedbackType="invalid"
            />
          </Form.Group>
          <Button className="w-100 btn btn-lg btn-primary"
                  type="submit"
          >
            <span className="px-2">Register</span>
          </Button>
        </Form>
      </main>
    </>
  );
}

export default Register;
