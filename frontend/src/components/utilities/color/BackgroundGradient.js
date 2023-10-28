import React from "react";

function BackgroundGradient() {
  const colorData = [
    {
      color: "primary",
    },
    {
      color: "secondary",
    },
    {
      color: "success",
    },
    {
      color: "info",
    },
    {
      color: "warning",
    },
    {
      color: "danger",
    },
    {
      color: "light",
    },
    {
      color: "dark",
    },
  ];

  return (
    <>
      <div className="col-lg-4">
        {/* <!-- Background Gradient Utilities --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Custom Background Gradient Utilities
            </h6>
          </div>
          <div className="card-body">
            {colorData.map((item) => {
              return (
                <div
                  className={`px-3 py-5 bg-gradient-${item.color} text-white`}
                >{`.bg-gradient-${item.color}`}</div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default BackgroundGradient;
