import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">

        <a className="navbar-brand fw-bold" href="#">
          Home
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <a className="nav-link" href="#">About Dr.</a>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Diseases We Treat
              </a>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Diabetes</a></li>
                <li><a className="dropdown-item" href="#">Heart Disease</a></li>
                <li><a className="dropdown-item" href="#">Thyroid</a></li>
              </ul>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Surgeries & Treatments
              </a>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Knee Surgery</a></li>
                <li><a className="dropdown-item" href="#">Laser Treatment</a></li>
              </ul>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Patient Information
              </a>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Appointments</a></li>
                <li><a className="dropdown-item" href="#">Insurance</a></li>
              </ul>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Media
              </a>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Gallery</a></li>
                <li><a className="dropdown-item" href="#">Videos</a></li>
              </ul>
            </li>

            {/* Dropdown */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Testimonials
              </a>

              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Patient Reviews</a></li>
              </ul>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#">Contact Us</a>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;