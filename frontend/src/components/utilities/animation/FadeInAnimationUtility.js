import React, { useState } from "react";

function FadeInAnimationUtility() {
  const [isDrop, setIsDrop] = useState(false);
  const [isDrop2, setIsDrop2] = useState(false);

  return (
    <>
      <div className="col-lg-6">
        <div className="card position-relative">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Fade In Animation Utilty
            </h6>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <code>.animated--fade-in</code>
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
                        ? "dropdown-menu dropdown-menu-right animated--fade-in show"
                        : "dropdown-menu dropdown-menu-right animated--fade-in"
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
            <div className="small mb-1">Dropdown Button Example:</div>
            <div className="dropdown mb-4">
              <button
                onClick={() => setIsDrop2(!isDrop2)}
                className="btn btn-primary dropdown-toggle"
                type="button"
                id="dropdownMenuButton"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded={isDrop2}
              >
                Dropdown
              </button>
              <div
                className={
                  isDrop2
                    ? "dropdown-menu animated--fade-in show"
                    : "dropdown-menu animated--fade-in"
                }
                aria-labelledby="dropdownMenuButton"
              >
                <a className="dropdown-item" href="#">
                  Action
                </a>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </div>
            </div>
            <p className="mb-0 small">
              Note: This utility animates the CSS opacity property, meaning it
              will override any existing opacity on an element being animated!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FadeInAnimationUtility;
