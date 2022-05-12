import { Linkcategory } from "../linkcategory/Linkcategory";
import { User } from "../user/User";

export type Linksharing = {
  createdAt: Date;
  expiration: Date | null;
  id: string;
  link: string | null;
  linkcategories?: Array<Linkcategory>;
  sharingid?: User | null;
  updatedAt: Date;
};
