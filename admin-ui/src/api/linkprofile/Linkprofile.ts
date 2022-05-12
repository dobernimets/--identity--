import { Category } from "../category/Category";
import { Profile } from "../profile/Profile";

export type Linkprofile = {
  categoryid?: Category | null;
  createdAt: Date;
  id: string;
  ispublic: boolean | null;
  profileid?: Profile | null;
  title: string | null;
  updatedAt: Date;
  url: string | null;
};
