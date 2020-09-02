import React from "react";

export default function display({ value }) {
  return (
    <div className="display">
      <h2 className="display-text">{value}</h2>
    </div>
  );
}
