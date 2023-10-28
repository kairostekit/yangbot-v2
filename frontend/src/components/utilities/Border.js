import React from "react";

function Border() {
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
      color: "dark",
    },
  ];

  return (
    <>
      <h1 className="h3 mb-1 text-gray-800">Border Utilities</h1>
      <p className="mb-4">
        Bootstrap's default utility classes can be found on the official{" "}
        <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a>{" "}
        page. The custom utilities below were created to extend this theme past
        the default utility classes built into Bootstrap's framework.
      </p>
      <div className="row">
        <div className="col-lg-6">
          {colorData.map((item) => {
            return (
              <div className={`card mb-4 py-3 border-left-${item.color}`}>
                <div className="card-body">{`.border-left-${item.color}`}</div>
              </div>
            );
          })}
        </div>

        <div className="col-lg-6">
          {colorData.map((item) => {
            return (
              <div className={`card mb-4 py-3 border-bottom-${item.color}`}>
                <div className="card-body">
                  {`.border-bottom-${item.color}`}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Border;
