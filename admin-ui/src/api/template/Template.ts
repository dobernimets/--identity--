import { Group } from "../group/Group";
import { Templatecategory } from "../templatecategory/Templatecategory";

export type Template = {
  createdAt: Date;
  groups?: Array<Group>;
  id: string;
  name: string | null;
  templatecategories?: Array<Templatecategory>;
  updatedAt: Date;
};
