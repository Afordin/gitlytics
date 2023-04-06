import React from "react";

function SearchIcon({ width, height, className }) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      strokeWidth="2"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      color="currentColor"
      className={className}
    >
      <path
        d="M17 17l4 4M3 11a8 8 0 1016 0 8 8 0 00-16 0z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

export { SearchIcon };
