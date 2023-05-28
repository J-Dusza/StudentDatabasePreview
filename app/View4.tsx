import React, { useEffect, useState } from "react";
import { sortSchema4 } from "../shared/schemas";
import { Student } from "@prisma/client";
import SortButton from "../shared/components/SortButton";

async function getStudentsAboveAvarage(sort?: string, order?: boolean) {
  const parsedSort = sortSchema4.safeParse(sort);
  if (parsedSort.success === false) {
    const res = await fetch("/api/getStudentsAboveAvarage");
    return await res.json();
  }
  const res = await fetch(
    `/api/getStudentsAboveAvarage?sort=${sort}&direction=${
      order ? "desc" : "asc"
    }`
  );
  const data = await res.json();
  return data;
}

const View4 = () => {
  const [students, setStudents] = useState<Student[] | null>(null);
  const [sort, setSort] = useState<string | undefined>(undefined);
  const [direction, setDirection] = useState<boolean>(false);

  const fields = [
    { display: "Imię", value: "firstname" },
    { display: "Nazwisko", value: "lastname" },
    { display: "Średnia", value: "avarage" },
  ];

  useEffect(() => {
    getStudentsAboveAvarage(sort, direction).then((response) => {
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
          {students?.map((student: Student) => (
            <tr className="hover" key={student.id}>
              <td>{student.imie}</td>
              <td>{student.nazwisko}</td>
              <td>{student.srednia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default View4;
