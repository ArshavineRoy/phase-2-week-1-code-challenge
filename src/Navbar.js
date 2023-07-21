import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg sticky">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            src="../public/logo.png"
            alt="Logo"
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Bank of Flatiron
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse my-navbar-list"
          id="navbarSupportedContent"
        >
          <ul className="nav nav-underline">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
                href="#"
                role="button"
                aria-expanded="false"
              >
                For You
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item dropdown-list-item" href="#">
                    Open Account
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item dropdown-list-item" href="#">
                    Get a Card
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item dropdown-list-item" href="#">
                    Get a Loan
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item dropdown-list-item" href="#">
                    Investments
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item dropdown-list-item" href="#">
                    Forex
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                For Corporates
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About Us{" "}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Deals
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
