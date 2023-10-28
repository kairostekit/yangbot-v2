import React from "react";

function SplitButton() {
  let splitBtnData = [
    {
      color: "primary",
      icon: "flag",
    },
    {
      color: "success",
      icon: "check",
    },
    {
      color: "info",
      icon: "info-circle",
    },
    {
      color: "warning",
      icon: "exclamation-triangle",
    },
    {
      color: "danger",
      icon: "trash",
    },
    {
      color: "secondary",
      icon: "arrow-right",
    },
    {
      color: "light",
      icon: "arrow-right",
    },
  ];
  return (
    <>
      <div className="col-lg-6">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Split Buttons with Icon
            </h6>
          </div>
          <div className="card-body">
            <p>
              Works with any button colors, just use the{" "}
              <code>.btn-icon-split</code> class and the markup in the examples
              below. The examples below also use the
              <code>.text-white-50</code> helper class on the icons for
              additional styling, but it is not required.
            </p>
            {splitBtnData.map((item) => {
              return (
                <>
                  <a
                    href="#"
                    className={`btn btn-${item.color} btn-icon-split`}
                  >
                    <span className="icon text-white-50">
                      <i className={`fas fa-${item.icon}`}></i>
                    </span>
                    <span
                      className="text"
                      style={{ textTransform: "capitalize" }}
                    >{`Split Button ${item.color}`}</span>
                  </a>
                  <div className="my-2"></div>
                </>
              );
            })}

            <div className="mb-4"></div>
            <p>Also works with small and large button classes!</p>
            <a href="#" className="btn btn-primary btn-icon-split btn-sm">
              <span className="icon text-white-50">
                <i className="fas fa-flag"></i>
              </span>
              <span className="text">Split Button Small</span>
            </a>
            <div className="my-2"></div>
            <a href="#" className="btn btn-primary btn-icon-split btn-lg">
              <span className="icon text-white-50">
                <i className="fas fa-flag"></i>
              </span>
              <span className="text">Split Button Large</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default SplitButton;
