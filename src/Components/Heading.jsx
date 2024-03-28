import React from "react";

function Heading(title) {
  return (
    <>
      <h2>
        <div style={{ fontFamily: "sans-serif" }}>{title.name}</div>
      </h2>
    </>
  );
}

export default Heading;
