import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const title = `Welcome Username`;

  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="container-fluid">
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">{title}</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">
              Here is your Robot Army!
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
