"use client";
import React from 'react';
import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState("");
  const [displayNumber, setDisplayNumber] = useState("");

  const handleSubmit = () => {
    setDisplayNumber(number);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Number Input Example</h1>
      <label htmlFor="inputNumber">Enter a number:</label>
      <input
        id="inputNumber"
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      <label htmlFor="displayNumber">Last number entered:</label>
      <input
        id="displayNumber"
        type="text"
        value={displayNumber}
        readOnly
        style={{ marginTop: "10px" }}
      />
    </div>
  );
}
