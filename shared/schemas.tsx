import { z } from "zod";

export const sortDirectionSchema = z.enum(["asc", "desc"]);

export const sortSchema1 = z.enum([
  "id", // "id" is default
  "lastname",
  "firstname",
  "group",
  "project",
]);
export const sortSchema2 = z.enum([
  "id", // "id" is default
  "lastname",
  "firstname",
  "group",
]);
export const sortSchema3 = z.enum(["id", "project", "lastname", "firstname"]);
export const sortSchema4 = z.enum(["id", "avarage", "lastname", "firstname"]);
