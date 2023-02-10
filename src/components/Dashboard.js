import { useContext } from 'react'
import { Helmet } from 'react-helmet';
import Context from '../Context/Context';
import { ListGroup } from "react-bootstrap"

function Dashboard() {
  let {user, usersRobots} = useContext(Context)

  const title = user ? `Welcome ${user.username}!`: "No User Signed in";
  const subtitle = user ? `${user.bio}` : "No bio."

  return (
    <>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <main className="container-fluid">
        <div className="px-4 py-5 my-5 text-center">
          <h1 className="display-5 fw-bold">{title}</h1>
          <div className="col-lg-6 mx-auto">
            <h4>{subtitle}</h4>
              <p className="lead mb-4">
                Here is your Robot Army!
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <ListGroup>
                  {
                    usersRobots.map(bot => <ListGroup.Item key={bot.id}>{bot.robot_name}</ListGroup.Item>)
                  }
                </ListGroup>
              </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
