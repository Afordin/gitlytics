import React from "react";

function MobileMenuIcon({ width, height, className }) {
  return (
    <svg
      width={width}
      height={height}
      strokeWidth="2"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      className={className}
    >
      <path
        d="M3 5h18M3 12h18M3 19h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

export { MobileMenuIcon };
