import React from "react";
import DoughnutChart from "../charts/DoughnutChart";

function PieChart() {
  return (
    <>
      <div className="col-xl-8 col-lg-5 ">
        <div className="card shadow mb-4">
          {/* <!-- Card Header - Dropdown --> */}
          <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
            <h6 className="m-0 font-weight-bold text-primary">
              ประเภทของคำถามจาก Line
            </h6>
          </div>
          {/* <!-- Card Body --> */}
          <div className="card-body">
            <div className="doughnut-chart-container">
              <DoughnutChart />
            </div>
            <div className="mt-4 text-center small">
              <span className="mr-2"></span>
              <span className="mr-2"></span>
              <span className="mr-2"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PieChart;
