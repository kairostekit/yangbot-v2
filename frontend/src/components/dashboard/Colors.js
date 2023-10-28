import React from "react";

function Colors() {
  let colorData = [
    {
      clrName: "Primary",
      clrCode: "#4e73df",
      color: "primary",
    },
    {
      clrName: "Success",
      clrCode: "#1cc88a",
      color: "success",
    },
    {
      clrName: "Info",
      clrCode: "#36b9cc",
      color: "info",
    },
    {
      clrName: "Warning",
      clrCode: "#f6c23e",
      color: "warning",
    },
    {
      clrName: "Danger",
      clrCode: "#e74a3b",
      color: "danger",
    },
    {
      clrName: "Secondary",
      clrCode: "#858796",
      color: "secondary",
    },
    {
      clrName: "Light",
      clrCode: "#f8f9fc",
      color: "light",
    },
    {
      clrName: "Dark",
      clrCode: "#5a5c69",
      color: "dark",
    },
  ];
  
  return (
    <>
      <div className="row">
        {colorData.map((clrs) => {
          return (
            <div className="col-lg-6 mb-4">
              <div
                className={`card bg-${clrs.color} text-${
                  clrs.color == "light" ? "dark" : "white"
                } shadow`}
              >
                <div className="card-body">
                  {clrs.clrName}
                  <div
                    className={`text-${
                      clrs.color == "light" ? "dark" : "white"
                    }-50 small`}
                  >
                    {clrs.clrCode}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Colors;
