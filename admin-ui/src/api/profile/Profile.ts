import { Fileprofile } from "../fileprofile/Fileprofile";
import { User } from "../user/User";
import { Linkprofile } from "../linkprofile/Linkprofile";

export type Profile = {
  content: string | null;
  createdAt: Date;
  fileprofiles?: Array<Fileprofile>;
  id: string;
  identityid?: User | null;
  linkprofiles?: Array<Linkprofile>;
  title: string | null;
  updatedAt: Date;
};
