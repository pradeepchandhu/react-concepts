import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

function Navbar() {

  const name = useSelector((state) => state.user.name);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">

      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          Navbar
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">

          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/users">
                Users
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/one">
                One
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/two">
                Two
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                Blog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/parent">
                Parent
              </Link>
            </li>

            <li className="nav-item">
              <span className="nav-link fw-bold">
                {name}
              </span>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;