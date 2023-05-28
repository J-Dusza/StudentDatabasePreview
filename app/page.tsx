"use client";

import { useState } from "react";
import View1 from "./View1";
import View2 from "./View2";
import View3 from "./View3";
import View3_2 from "./View3_2";
import View4 from "./View4";
import Hint from "@/shared/components/Hint";

export default function Home() {
  const [view, setView] = useState("1");

  const onViewChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setView(e.currentTarget.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center gap-8">
      <div className="navbar bg-neutral text-neutral-content p-3 px-8">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
            Studenci - baza danych
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal shadow-2xl rounded-box px-1 z-50">
            <li tabIndex={0}>
              <a>
                Widok {view}
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                </svg>
              </a>
              <ul className="p-2 bg-neutral">
                <li>
                  <button
                    value={`1`}
                    className={`${view === `1` ? " active " : ""} `}
                    onClick={onViewChange}
                  >
                    Widok 1
                  </button>
                </li>
                <li>
                  <button
                    value={`2`}
                    className={`${view === `2` ? " active " : ""} `}
                    onClick={onViewChange}
                  >
                    Widok 2
                  </button>
                </li>
                <li>
                  <button
                    value={`3`}
                    className={`${view === `3` ? " active " : ""} `}
                    onClick={onViewChange}
                  >
                    Widok 3
                  </button>
                </li>
                <li>
                  <button
                    value={`3.2`}
                    className={`${view === `3.2` ? " active " : ""} `}
                    onClick={onViewChange}
                  >
                    Widok 3.2
                  </button>
                </li>
                <li>
                  <button
                    value={`4`}
                    className={`${view === `4` ? " active " : ""} `}
                    onClick={onViewChange}
                  >
                    Widok 4
                  </button>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      <Hint />

      <div className=""></div>
      {view === "1" && <View1 />}
      {view === "2" && <View2 />}
      {view === "3" && <View3 />}
      {view === "3.2" && <View3_2 />}
      {view === "4" && <View4 />}
    </main>
  );
}
