import { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import Context from '../Context/Context';

function Logout() {
  const {} = useContext(Context)
  const navigate = useNavigate();

  const handleLogout = (e) => {
    console.log("Logging out")
  };

  return (
    <>
      <Helmet>
        <title>Logout</title>
      </Helmet>
      <main className="container-auth text-center">
        <Form noValidate>
          <i className="bi bi-file-lock-fill auth-icon my-4"/>
          <p className="mb-3 fw-normal">Click <strong>Log out</strong> button to log out and navigate back to home.</p>
          <Button className="w-100 btn btn-lg btn-primary"
                  type="button"
                  onClick={handleLogout}
          >
            <span className="px-2">Log out</span>
          </Button>
        </Form>
      </main>
    </>
  );
}

export default Logout;
