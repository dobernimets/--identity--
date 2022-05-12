import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MyidentityWhereInput = {
  id?: StringFilter;
  identityid?: UserWhereUniqueInput;
  myidentitycontactid?: UserWhereUniqueInput;
};
