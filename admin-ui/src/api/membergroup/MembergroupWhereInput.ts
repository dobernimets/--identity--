import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MembergroupWhereInput = {
  groupid?: GroupWhereUniqueInput;
  id?: StringFilter;
  memberid?: UserWhereUniqueInput;
};
