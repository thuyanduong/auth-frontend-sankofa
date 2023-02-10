import { NavLink } from 'react-router-dom';
import logo from '../logo.svg';
import { useContext } from 'react'
import Context from '../Context/Context';

function MainNavbar() {
  const {user} = useContext(Context)

  const loggedOutItems = [
    { path: '/login', title: 'Login' },
    { path: '/signup', title: 'Signup' },
  ];

  const loggedInItems = [
    { path: '/dashboard', title: user && `${user.username}'s Dashboard`},
    { path: '/logout', title: 'Logout' }
  ];

  const items = user ? loggedInItems : loggedOutItems

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand d-flex pt-2" to="/">
          <img src={logo} alt="" className="navbar-logo" />React-Bootstrap
        </NavLink>
        <button className="navbar-toggler collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarMenu"
                aria-controls="navbarMenu"
                aria-expanded="false"
                aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"/>
        </button>
        <div className="collapse navbar-collapse ml-auto" id="navbarMenu">
          <ul className="navbar-nav  ml-auto">
            {
              items.map((item, i) => (
                <li key={i} className="nav-item">
                  <NavLink className="nav-link" to={item.path}>{item.title}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavbar;
