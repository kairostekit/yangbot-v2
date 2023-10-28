import React from "react";

function RotationUtilities() {
  return (
    <>
      <div className="card">
        <div className="card-header py-3">
          <h6 className="m-0 font-weight-bold text-primary">
            Rotation Utilities
          </h6>
        </div>
        <div className="card-body text-center">
          <div className="bg-primary text-white p-3 rotate-15 d-inline-block my-4">
            .rotate-15
          </div>
          <hr />
          <div className="bg-primary text-white p-3 rotate-n-15 d-inline-block my-4">
            .rotate-n-15
          </div>
        </div>
      </div>
    </>
  );
}

export default RotationUtilities;
