import React from "react";

const ArrowUp = ({ hidden }) => (
  <svg
    width="24px"
    height="24px"
    viewBox="0 0 24 24"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    style={{ visibility: hidden ? "hidden" : "visible" }}
  >
    <title>icons/arrow-up-24px</title>
    <desc>Created with Sketch.</desc>
    <defs>
      <path
        d="M7.7125,15.2925 L11.5925,11.4125 L15.4725,15.2925 C15.8625,15.6825 16.4925,15.6825 16.8825,15.2925 C17.2725,14.9025 17.2725,14.2725 16.8825,13.8825 L12.2925,9.2925 C11.9025,8.9025 11.2725,8.9025 10.8825,9.2925 L6.2925,13.8825 C5.9025,14.2725 5.9025,14.9025 6.2925,15.2925 C6.6825,15.6725 7.3225,15.6825 7.7125,15.2925 Z"
        id="path-1"
      ></path>
    </defs>
    <g
      id="icons/arrow-up-24px"
      stroke="none"
      strokeWidth="1"
      fill="none"
      fillRule="evenodd"
    >
      <mask id="mask-2" fill="white">
        <use href="#path-1"></use>
      </mask>
      <use fill="currentColor" fillRule="nonzero" href="#path-1"></use>
    </g>
  </svg>
);

export default ArrowUp;
