import React, { useEffect, useState } from "react";
import { sortSchema3 } from "../shared/schemas";
import { Projekt, Prowadzacy } from "@prisma/client";
import SortButton from "../shared/components/SortButton";

async function getTeachers(sort?: string, order?: boolean) {
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

  const fields = [
    { display: "Nazwisko", value: "lastname" },
    { display: "Imię", value: "firstname" },
    { display: "Projekty", value: "project" },
  ];

  useEffect(() => {
    getTeachers(sort, direction).then((response) => {
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
