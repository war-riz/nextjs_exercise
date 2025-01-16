"use client"

import { useState } from "react";

export const Counter = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <p>Count: {count}</p>
      <button type="button"
        onClick={() => {
          setcount(count + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
};

