import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MembergroupUpdateInput = {
  groupid?: GroupWhereUniqueInput | null;
  memberid?: UserWhereUniqueInput | null;
};
