import React from "react";

function MailIcon({ width, height, className }) {
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
        d="M2 17V7a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2z"
        fill="#F3F3F3"
        stroke="#F3F3F3"
        strokeWidth="1.5"
      ></path>
      <path
        d="M7 9l5 3.5L17 9"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
}

export { MailIcon };
