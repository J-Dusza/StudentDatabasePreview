import React, { useEffect, useState } from "react";
import { sortSchema3 } from "../shared/schemas";
import { Projekt } from "@prisma/client";
import SortButton from "../shared/components/SortButton";

async function getProjects(sort?: string, order?: boolean) {
  const parsedSort = sortSchema3.safeParse(sort);
  if (parsedSort.success === false) {
    const res = await fetch("/api/getProjects");
    return await res.json();
  }
  const res = await fetch(
    `/api/getProjects?sort=${sort}&direction=${order ? "desc" : "asc"}`
  );
  const data = await res.json();
  return data;
}

const View3 = () => {
  const [projects, setProjects] = useState<Projekt[] | null>(null);
  const [sort, setSort] = useState<string | undefined>(undefined);
  const [direction, setDirection] = useState<boolean>(false);

  const fields = [
    { display: "Projekt", value: "project" },
    { display: "Nazwisko", value: "lastname" },
    { display: "Imię", value: "firstname" },
  ];

  useEffect(() => {
    getProjects(sort, direction).then((response) => {
      setProjects(response.students);
    });
  }, [sort, direction]);

  const onSortChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSort(e.currentTarget.value);
    if (sort === e.currentTarget.value) {
      setDirection((prev) => !prev);
    } else {
      setDirection(false);
    }
  };

  return (
    <div className="overflow-x-auto w-screen px-20 max-w-8xl">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            {fields.map((field) => (
              <th key={field.value}>
                <SortButton
                  value={field.value}
                  sort={sort}
                  direction={direction}
                  onSortChange={onSortChange}
                >
                  {field.display}
                </SortButton>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {projects?.map((project: any) => (
            <tr className="hover" key={project.id}>
              <td>{project.temat}</td>
              <td>{project.prowadzacy.nazwisko}</td>
              <td>{project.prowadzacy.imie}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default View3;
