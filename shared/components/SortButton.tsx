import React from "react";

type sortButonProps = {
  value: string;
  sort: string | undefined;
  direction: boolean | null;
  onSortChange: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
};

const SortButton = (props: sortButonProps) => {
  return (
    <button
      value={props.value}
      className=" hover:cursor-pointer w-full h-full text-left uppercase flex items-center justify-between"
      onClick={props.onSortChange}
    >
      {props.children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={` w-4 h-4 inline 
        ${props.sort === props.value ? "" : "invisible"} 
        ${props.direction ? " rotate-180" : ""} `}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
    </button>
  );
};

export default SortButton;
