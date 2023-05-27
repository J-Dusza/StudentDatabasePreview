import React, { useEffect, useState } from "react";
import { z } from "zod";
import { sortSchema2 } from "../shared/schemas";
import { Student } from "@prisma/client";
import { Arrow } from "../shared/icons/Arrow";
import SortButton from "../shared/components/SortButton";

async function getStudentsGroups(sort?: string, order?: boolean) {
  const parsedSort = sortSchema2.safeParse(sort);
  if (parsedSort.success === false) {
    const res = await fetch("/api/getStudentsGroups");
    return await res.json();
  }
  const res = await fetch(
    `/api/getStudentsGroups?sort=${sort}&direction=${order ? "desc" : "asc"}`
  );
  const data = await res.json();
  return data;
}

const View2 = () => {
  const [students, setStudents] = useState<Student[] | null>(null);
  const [sort, setSort] = useState<string | undefined>(undefined);
  const [direction, setDirection] = useState<boolean>(false);

  useEffect(() => {
    getStudentsGroups(sort, direction).then((response) => {
      setStudents(response.students);
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
                value="group"
                sort={sort}
                direction={direction}
                onSortChange={onSortChange}
              >
                Grupa
              </SortButton>
            </th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student: any) => (
            <tr className="hover" key={student.id}>
              <td>{student.imie}</td>
              <td>{student.nazwisko}</td>
              <td>{student.grupa ? student.grupa.nazwa : "BRAK"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default View2;
