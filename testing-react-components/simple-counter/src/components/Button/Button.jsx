import React from "react";
import "./button.css";

export default function Button({ onClick, children, ...rest }) {
  return <button onClick={onClick} type="button" {...rest}>{children}</button>;
}
