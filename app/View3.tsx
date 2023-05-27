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
    <div className="overflow-x-auto w-screen px-20 max-w-4xl">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <SortButton
                value="project"
                sort={sort}
                direction={direction}
                onSortChange={onSortChange}
              >
                Projekt
              </SortButton>
            </th>
            <th>
              <SortButton
                value="lastname"
                sort={sort}
                direction={direction}
                onSortChange={onSortChange}
              >
                Nazwisko
              </SortButton>
            </th>
            <th>
              <SortButton
                value="firstname"
                sort={sort}
                direction={direction}
                onSortChange={onSortChange}
              >
                Imię
              </SortButton>
            </th>
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
