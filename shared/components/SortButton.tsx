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
      className=" hover:cursor-pointer w-full h-full text-left uppercase flex items-center gap-3"
      onClick={props.onSortChange}
    >
      {props.children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="13"
        height="13"
        fill="currentColor"
        className={`inline
        ${props.sort === props.value ? "" : "invisible"} 
        ${props.direction ? " rotate-180" : ""}`}
        viewBox="0 0 16 16"
      >
        <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
      </svg>
    </button>
  );
};

export default SortButton;
