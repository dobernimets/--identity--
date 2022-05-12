import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type ProfileviewCreateInput = {
  identityid?: UserWhereUniqueInput | null;
  viewcategoryid?: CategoryWhereUniqueInput | null;
  watchid?: UserWhereUniqueInput | null;
};
