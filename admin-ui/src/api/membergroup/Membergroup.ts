import { Group } from "../group/Group";
import { User } from "../user/User";

export type Membergroup = {
  createdAt: Date;
  groupid?: Group | null;
  id: string;
  memberid?: User | null;
  updatedAt: Date;
};
