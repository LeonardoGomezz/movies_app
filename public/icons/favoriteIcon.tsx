import * as React from "react";
interface IconProps {
  width?: number
  height?: number
  style?: string
}

const FavoriteIcon = ({width = 25, height = 25, style}: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 25 25"
    className={style}
  >
    <path
      fill="#F6F6F6"
      d="M23.438 9.18c0 6.836-10.136 12.369-10.568 12.597a.78.78 0 0 1-.74 0C11.698 21.55 1.563 16.016 1.563 9.18a6.06 6.06 0 0 1 6.054-6.055c2.017 0 3.782.867 4.883 2.333 1.1-1.466 2.866-2.333 4.883-2.333a6.06 6.06 0 0 1 6.055 6.055"
    ></path>
  </svg>
);

export default FavoriteIcon;
