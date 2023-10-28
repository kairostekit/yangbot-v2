import React, { useState } from "react";

function GrowInAnimationUtility() {
  const [isDrop, setIsDrop] = useState(false);

  return (
    <>
      <div className="col-lg-6">
        <div className="card position-relative">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Grow In Animation Utilty
            </h6>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <code>.animated--grow-in</code>
            </div>
            <div className="small mb-1">Navbar Dropdown Example:</div>
            <nav className="navbar navbar-expand navbar-light bg-light mb-4">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a
                    onClick={() => setIsDrop(!isDrop)}
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={isDrop}
                  >
                    Dropdown
                  </a>
                  <div
                    className={
                      isDrop
                        ? "dropdown-menu dropdown-menu-right animated--grow-in show"
                        : "dropdown-menu dropdown-menu-right animated--grow-in"
                    }
                    aria-labelledby="navbarDropdown"
                  >
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </div>
                </li>
              </ul>
            </nav>
            <p className="mb-0 small">
              Note: This utility animates the CSS transform property, meaning it
              will override any existing transforms on an element being
              animated! In this theme, the grow in animation is only being used
              on dropdowns within the navbar.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default GrowInAnimationUtility;
