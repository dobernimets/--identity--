import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type ProfileviewWhereInput = {
  id?: StringFilter;
  identityid?: UserWhereUniqueInput;
  viewcategoryid?: CategoryWhereUniqueInput;
  watchid?: UserWhereUniqueInput;
};
