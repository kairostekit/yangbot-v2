import React from "react";

function GrayscaleBackground({ colorData }) {
    
  return (
    <>
      <div className="col-lg-4">
        {/* <!-- Grayscale Utilities --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Custom Grayscale Background Utilities
            </h6>
          </div>
          <div className="card-body">
            {colorData.map((item) => {
              return (
                <div
                  className={`p-3 bg-gray-${item.count} ${
                    item.count > 400 ? "text-white" : ""
                  }`}
                >{`.bg-gray-${item.count}`}</div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default GrayscaleBackground;
