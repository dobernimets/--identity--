import { User } from "../user/User";
import { Category } from "../category/Category";

export type Datarequest = {
  askid?: User | null;
  createdAt: Date;
  id: string;
  isactivereq: boolean | null;
  receiveid?: User | null;
  reqcategoryid?: Category | null;
  status?: "request" | "rejection" | "agreement" | "cancelation" | null;
  updatedAt: Date;
};
