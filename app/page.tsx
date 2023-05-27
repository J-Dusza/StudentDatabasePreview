"use client";

import { useEffect, useState } from "react";
import { z } from "zod";
import View1 from "./View1";
import View2 from "./View2";
import View3 from "./View4";
import View3_2 from "./View3_2";
import View4 from "./View4";

export default function Home() {
  const [view, setView] = useState("1");
  const numOfViews = 5;

  const onViewChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setView(e.currentTarget.value);
  };

  return (
    <main className="flex min-h-screen flex-col items-center pt-20 gap-8">
      <h1 className="text-5xl font-extrabold">Baza danych studentów</h1>
      <div>
        {[...Array(numOfViews)].map((_, i) => (
          <button
            value={`${i + 1}`}
            onClick={onViewChange}
            className={`btn btn-sm btn-circle w-24 mx-3 ${
              view === `${i + 1}` ? "btn-active btn-info" : "btn-outline"
            } `}
          >
            {i + 1}
          </button>
        ))}
      </div>

      {view === "1" && <View1 />}
      {view === "2" && <View2 />}
      {view === "3" && <View3 />}
      {view === "4" && <View3_2 />}
      {/* {view === "5" && <View4 />} */}
    </main>
  );
}
