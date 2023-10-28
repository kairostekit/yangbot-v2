import React from "react";

function ProgressSmallUtility() {
  return (
    <>
      <div className="card mb-4">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Progress Small Utility
          </h6>
        </div>
        <div className="card-body">
          <div className="mb-1 small">Normal Progress Bar</div>
          <div className="progress mb-4">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          <div className="mb-1 small">Small Progress Bar</div>
          <div className="progress progress-sm mb-2">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>
          </div>
          Use the <code>.progress-sm</code> class along with{" "}
          <code>.progress</code>
        </div>
      </div>
    </>
  );
}

export default ProgressSmallUtility;
