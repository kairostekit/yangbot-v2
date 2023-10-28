import React from "react";

function Projects() {
  const projectData = [
    {
      title: "Server Migration",
      percentage: "20",
      color: "danger",
    },
    {
      title: "Sales Tracking",
      percentage: "40",
      color: "warning",
    },
    {
      title: "Customer Database",
      percentage: "60",
      color: "primary",
    },
    {
      title: "Payout Details",
      percentage: "80",
      color: "info",
    },
    {
      title: "Account Setup",
      percentage: "100",
      color: "success",
    },
  ];
  
  return (
    <>
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">Projects</h6>
        </div>
        <div className="card-body">
          {projectData.map((item, index) => {
            return (
              <div key={index}>
                <h4 className="small font-weight-bold">
                  {item.title}
                  <span className="float-right">
                    {item.percentage == 100
                      ? "Compelete!"
                      : `${item.percentage}%`}
                  </span>
                </h4>
                <div className="progress mb-4">
                  <div
                    className={`progress-bar bg-${item.color}`}
                    role="progressbar"
                    style={{ width: `${item.percentage}%` }}
                    aria-valuenow={item.percentage}
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Projects;
