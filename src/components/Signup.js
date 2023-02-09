import { Helmet } from 'react-helmet';
import { Col, Button, Form, FormControl, InputGroup, FormLabel, Spinner,} from 'react-bootstrap';
import { useState } from 'react';

function Signup() {

  let [username, setUsername] = useState("")
  let [password, setPassword] = useState("")
  let [bio, setBio] = useState("")

  return (
    <>
      <Helmet>
        <title>Signup</title>
      </Helmet>
      <main className="container-signup">
        <Form className="row g-2" noValidate>
          <i className="bi bi-file-lock-fill auth-icon mt-3 text-center"/>
          <p className="fw-normal text-center">Fill up the form and then click the <strong>Sign up</strong> button to sign up.</p>
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
                  type="button"
          >
            <span className="px-2">Sign up</span>
          </Button>
        </Form>
      </main>
    </>
  );
}

export default Signup;
