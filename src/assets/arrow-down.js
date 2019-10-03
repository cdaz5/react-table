import React from "react";

const ArrowDown = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
  >
    <defs>
      <path
        id="a"
        d="M1.712.292l3.88 3.88 3.88-3.88a.996.996 0 1 1 1.41 1.41l-4.59 4.59a.996.996 0 0 1-1.41 0l-4.59-4.59a.996.996 0 0 1 0-1.41c.39-.38 1.03-.39 1.42 0z"
      />
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(6 9)">
      <mask id="b" fill="#fff">
        <use href="#a" />
      </mask>
      <use fill="#000" fillRule="nonzero" href="#a" />
      <g fill="currentColor" fillRule="nonzero" mask="url(#b)">
        <path d="M-6-9h24v24H-6z" />
      </g>
    </g>
  </svg>
);

export default ArrowDown;
