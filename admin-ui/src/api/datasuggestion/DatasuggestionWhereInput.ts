import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type DatasuggestionWhereInput = {
  id?: StringFilter;
  isactivesuggestion?: BooleanNullableFilter;
  receiveid?: UserWhereUniqueInput;
  status?: "offer" | "rejection" | "agreement" | "cancelation";
  suggestioncategoryid?: CategoryWhereUniqueInput;
  suggestionid?: UserWhereUniqueInput;
};
