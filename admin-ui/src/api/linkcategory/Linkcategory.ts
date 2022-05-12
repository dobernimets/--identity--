import { Category } from "../category/Category";
import { Linksharing } from "../linksharing/Linksharing";

export type Linkcategory = {
  categoryid?: Category | null;
  createdAt: Date;
  id: string;
  linkid?: Linksharing | null;
  updatedAt: Date;
};
