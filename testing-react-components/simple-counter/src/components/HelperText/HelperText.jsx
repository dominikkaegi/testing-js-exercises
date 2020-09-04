import React from "react";

export default function HelperText({ show = true, type = "info", children }) {
  if (!show) {
   return null
  }

  let color;
  switch (type) {
    case "info":
      color = "teal";
      break;
    case "success":
      color = "green";
      break;
    case "error":
      color = "darkred";
      break;
    case "warning":
      color = "gold";
      break;
  }

  return <span style={{ color }}>{children}</span>;
}
