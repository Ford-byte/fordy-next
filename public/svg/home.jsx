import React from "react";

export default function Home({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      strokeWidth={1}
      stroke="currentColor"
      fill="none"
      className={className}
    >
      <g>
        <path
          d="M9.5 17.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1z"
        />
        <path
          fillRule="evenodd"
          d="M14.169 2.575a3.5 3.5 0 0 0-4.338 0l-6.5 5.132A3.5 3.5 0 0 0 2 10.454V18.5A3.5 3.5 0 0 0 5.5 22h13a3.5 3.5 0 0 0 3.5-3.5v-8.046a3.5 3.5 0 0 0-1.331-2.747zm-3.718.785a2.5 2.5 0 0 1 3.098 0l6.5 5.132A2.5 2.5 0 0 1 21 10.454V18.5a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-8.046a2.5 2.5 0 0 1 .95-1.962z"
          clipRule="evenodd"
        />
      </g>
    </svg>
  );
}
