import React, { useState } from "react";

function DropdownNoArrow() {
  const [isDrop, setIsDrop] = useState(false);
  
  return (
    <>
      <div className="card mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Dropdown - No Arrow
          </h6>
        </div>
        <div className="card-body">
          <div
            className={
              isDrop ? "dropdown no-arrow mb-4 show" : "dropdown no-arrow mb-4"
            }
          >
            <button
              onClick={() => setIsDrop(!isDrop)}
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={isDrop}
            >
              Dropdown (no arrow)
            </button>
            <div
              className={
                isDrop ? "dropdown-menu show dropdownNoArrow" : "dropdown-menu"
              }
              x-placement={isDrop ? "bottom-start" : ""}
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
          Add the <code>.no-arrow</code> class alongside the{" "}
          <code>.dropdown</code>
        </div>
      </div>
    </>
  );
}

export default DropdownNoArrow;
