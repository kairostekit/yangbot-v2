import React from "react";
import BackgroundGradient from "./color/BackgroundGradient";
import GrayscaleBackground from "./color/GrayscaleBackground";
import TextColor from "./color/TextColor";

function Color() {
  const colorData = [
    {
      count: 100,
    },
    {
      count: 200,
    },
    {
      count: 300,
    },
    {
      count: 400,
    },
    {
      count: 500,
    },
    {
      count: 600,
    },
    {
      count: 700,
    },
    {
      count: 800,
    },
    {
      count: 900,
    },
  ];

  return (
    <>
      <h1 className="h3 mb-1 text-gray-800">Color Utilities</h1>
      <p className="mb-4">
        Bootstrap's default utility classes can be found on the official{" "}
        <a href="https://getbootstrap.com/docs">Bootstrap Documentation</a>{" "}
        page. The custom utilities below were created to extend this theme past
        the default utility classes built into Bootstrap's framework.
      </p>
      <div className="row">
        <TextColor colorData={colorData} />
        <BackgroundGradient />
        <GrayscaleBackground colorData={colorData} />
      </div>
    </>
  );
}

export default Color;
