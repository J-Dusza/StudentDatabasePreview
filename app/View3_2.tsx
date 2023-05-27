import React, { useEffect, useState } from "react";
import { z } from "zod";
import { sortSchema3 } from "../shared/schemas";
import { Projekt, Prowadzacy } from "@prisma/client";
import { Arrow } from "../shared/icons/Arrow";
import SortButton from "../shared/components/SortButton";

async function getStudentsProjects(sort?: string, order?: boolean) {
  const parsedSort = sortSchema3.safeParse(sort);
  if (parsedSort.success === false) {
    const res = await fetch("/api/getTeachers");
    return await res.json();
  }
  const res = await fetch(
    `/api/getTeachers?sort=${sort}&direction=${order ? "desc" : "asc"}`
  );
  const data = await res.json();
  return data;
}

const View3_2 = () => {
  const [teachers, setTeachers] = useState<Prowadzacy[] | null>(null);
  const [sort, setSort] = useState<string | undefined>(undefined);
  const [direction, setDirection] = useState<boolean>(false);

  useEffect(() => {
    getStudentsProjects(sort, direction).then((response) => {
      setTeachers(response.students);
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
    <div className="overflow-x-auto w-full px-20 max-w-5xl">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
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
            <th>
              <SortButton
                value="project"
                sort={sort}
                direction={direction}
                onSortChange={onSortChange}
              >
                Projekty
              </SortButton>
            </th>
          </tr>
        </thead>
        <tbody>
          {teachers?.map((teacher: any) => (
            <tr className="hover" key={teacher.id}>
              <td>{teacher.nazwisko}</td>
              <td>{teacher.imie}</td>
              <td>
                {teacher.projekty.map((project: Projekt) => (
                  <p>{project.temat}</p>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default View3_2;
