import { User } from "../user/User";
import { Category } from "../category/Category";

export type Datasuggestion = {
  createdAt: Date;
  id: string;
  isactivesuggestion: boolean | null;
  receiveid?: User | null;
  status?: "offer" | "rejection" | "agreement" | "cancelation" | null;
  suggestioncategoryid?: Category | null;
  suggestionid?: User | null;
  updatedAt: Date;
};
