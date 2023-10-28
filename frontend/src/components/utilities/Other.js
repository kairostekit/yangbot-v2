import React from "react";
import DropdownNoArrow from "./other/DropdownNoArrow";
import OverflowHiddenUtility from "./other/OverflowHiddenUtility";
import ProgressSmallUtility from "./other/ProgressSmallUtility";
import RotationUtilities from "./other/RotationUtilities";

function Other() {
  return (
    <>
      <h1 className="h3 mb-1 text-gray-800">Other Utilities</h1>
      <p className="mb-4">
        Bootstrap's default utility classes can be found on the official{" "}
        <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a>{" "}
        page. The custom utilities below were created to extend this theme past
        the default utility classes built into Bootstrap's framework.
      </p>
      <div className="row">
        <div className="col-lg-6">
          <OverflowHiddenUtility />
          <ProgressSmallUtility />
          <DropdownNoArrow />
        </div>
        <div className="col-lg-6">
          <RotationUtilities />
        </div>
      </div>
    </>
  );
}

export default Other;
