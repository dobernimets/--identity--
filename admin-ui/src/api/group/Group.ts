import { Membergroup } from "../membergroup/Membergroup";
import { User } from "../user/User";
import { Template } from "../template/Template";

export type Group = {
  createdAt: Date;
  id: string;
  membergroups?: Array<Membergroup>;
  namegroup: string | null;
  ownerid?: User | null;
  templateid?: Template | null;
  updatedAt: Date;
};
