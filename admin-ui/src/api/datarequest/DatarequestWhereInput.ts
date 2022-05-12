import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type DatarequestWhereInput = {
  askid?: UserWhereUniqueInput;
  id?: StringFilter;
  isactivereq?: BooleanNullableFilter;
  receiveid?: UserWhereUniqueInput;
  reqcategoryid?: CategoryWhereUniqueInput;
  status?: "request" | "rejection" | "agreement" | "cancelation";
};
