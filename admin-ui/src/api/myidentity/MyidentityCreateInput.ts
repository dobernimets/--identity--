import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MyidentityCreateInput = {
  identityid?: UserWhereUniqueInput | null;
  myidentitycontactid?: UserWhereUniqueInput | null;
};
