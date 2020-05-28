import React, { useState, useEffect } from "react";

export default function Slider() {
  return (
    <main>
      <div>
        <label htmlFor="points">max.budget: xeuros</label>
        <input type="range" id="budget" min="0" max="10"></input>
        <label htmlFor="points"> min. floor: euros</label>
        <input type="range" id="floor" min="0" max="10"></input>
      </div>
    </main>
  );
}
