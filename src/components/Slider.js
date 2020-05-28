import React, { useState, useEffect } from "react";
import InputRange from "react-input-range";
import "react-input-range/lib/css/index.css";

export default function Slider(props) {
  const {
    name,
    value,
    minValue,
    maxValue,
    lUp,
    lLeft,
    lRight,
    stateSetter,
  } = props.data;
  return (
    <div>
      <label htmlFor={name}>{lUp}</label>
      <br />
      <label htmlFor={name}>{lLeft}</label>
      <InputRange
        name={name}
        minValue={minValue}
        maxValue={maxValue}
        value={value}
        onChange={(value) => stateSetter(value)}
      />
      <label htmlFor={name}>{lRight}</label>
    </div>
  );
}
