import React from "react";

function CloseIcon({styles, w = '40', h = '40' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={w}
      height={h}
      viewBox="0 0 40 40"
      className={styles}
      fill="#000000"
      
    >
      <path d="M29.6667 12.88L27.7867 11L20.3333 18.4533L12.88 11L11 12.88L18.4533 20.3333L11 27.7867L12.88 29.6667L20.3333 22.2133L27.7867 29.6667L29.6667 27.7867L22.2133 20.3333L29.6667 12.88Z" />
    </svg>
  );
}

export default CloseIcon;
