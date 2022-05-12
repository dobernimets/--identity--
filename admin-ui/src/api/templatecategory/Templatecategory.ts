import { Category } from "../category/Category";
import { Template } from "../template/Template";

export type Templatecategory = {
  caregoryid?: Category | null;
  createdAt: Date;
  id: string;
  templateid?: Template | null;
  updatedAt: Date;
};
