import React from "react";

function TextColor({ colorData }) {
    
  return (
    <>
      <div className="col-lg-4">
        {/* <!-- Custom Text Color Utilities --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Custom Text Color Utilities
            </h6>
          </div>
          <div className="card-body">
            {colorData.map((item) => {
              return (
                <p
                  className={`text-gray-${item.count} p-3 ${
                    item.count < 500 ? "bg-dark" : ""
                  } m-0`}
                >{`.text-gray-${item.count}`}</p>
              );
            })}
          </div>
        </div>

        {/* <!-- Custom Font Size Utilities --> */}
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">
              Custom Font Size Utilities
            </h6>
          </div>
          <div className="card-body">
            <p className="text-xs">.text-xs</p>
            <p className="text-lg mb-0">.text-lg</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TextColor;
