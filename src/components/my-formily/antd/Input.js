import React from "react";

export default function Input(props) {
  return (
    <input
      {...props}
      value={props.value || ""}
      style={{ ...props.style, border: "solid 1px green" }}
    />
  );
}
