"use client";

import React, { useState } from "react";

type Props = {};

const Hint = (props: Props) => {
  const [hint, setHint] = useState(true);

  return (
    <div className={`w-full px-10 ${hint ? "" : "hidden"}`}>
      <div className="alert shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info flex-shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>Kliknij nazwę kolumny aby posortować tabelę</span>
        </div>
        <div className="flex-none">
          <button
            onClick={() => setHint((state) => !state)}
            className="btn btn-sm btn-info"
          >
            ok
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hint;
