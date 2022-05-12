import { Category } from "../category/Category";
import { Profile } from "../profile/Profile";

export type Fileprofile = {
  categoryid?: Category | null;
  createdAt: Date;
  file: string | null;
  id: string;
  ispublic: boolean | null;
  profileid?: Profile | null;
  title: string | null;
  updatedAt: Date;
};
