import { User } from "../user/User";
import { Category } from "../category/Category";

export type Profileview = {
  createdAt: Date;
  id: string;
  identityid?: User | null;
  updatedAt: Date;
  viewcategoryid?: Category | null;
  watchid?: User | null;
};
