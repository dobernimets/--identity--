import { User } from "../user/User";

export type Myidentity = {
  createdAt: Date;
  id: string;
  identityid?: User | null;
  myidentitycontactid?: User | null;
  updatedAt: Date;
};
