import { GroupWhereUniqueInput } from "../group/GroupWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MembergroupCreateInput = {
  groupid?: GroupWhereUniqueInput | null;
  memberid?: UserWhereUniqueInput | null;
};
