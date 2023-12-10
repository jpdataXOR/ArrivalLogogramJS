import React, { useRef } from "react";

// Function to generate random number between min and max
function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

// Function to draw disks
function disks(
  ctx,
  center,
  rad,
  nmbDisks,
  minAngleExtent,
  maxAngleExtent,
  size = 25,
  tendril = false,
) {
  let radVarDisk = getRandom(size / 4, size);

  for (let i = 1; i < nmbDisks; i++) {
    let angle = getRandom(minAngleExtent, maxAngleExtent);

    let varCenter = 35;

    let xVar = center[0] + getRandom(-varCenter, varCenter);
    let yVar = center[1] + getRandom(-varCenter, varCenter);

    let x0 = xVar + rad * Math.cos(angle);
    let y0 = yVar + rad * Math.sin(angle);

    let x1 = x0 + getRandom(0, radVarDisk);
    let y1 = y0 + getRandom(0, radVarDisk);

    ctx.beginPath();
    ctx.ellipse(x0, y0, x1, y1, 0, 0, 2 * Math.PI);
    ctx.fillStyle = "black";
    ctx.fill();

    // Tendril logic goes here
  }
}

// Function to generate logogram
function logogram(seed, imgSize, varThickness, varCenter, nmbCirc, varRad) {
  // Logogram logic goes here
}

// Function to generate PNGs
function generatePNGs(nmbPics) {
  // PNG generation logic goes here
}

// Main logic
let seed = process.argv[2] ? parseFloat(process.argv[2]) : getRandom(0, 10000);
Math.seedrandom(seed);
logogram(seed, [2048, 2048], 10, 10, 100, [1, 1]);

const Logogram = () => {
  const canvasRef = useRef(null);

  const draw = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // Call your drawing functions here
  };

  return (
    <div>
      <button
        style={{ position: "absolute", top: "50px", left: "50%" }}
        onClick={draw}
      >
        Draw
      </button>
      <canvas ref={canvasRef} />
    </div>
  );
};
//Commit
export default Logogram;
