import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type DatasuggestionUpdateInput = {
  isactivesuggestion?: boolean | null;
  receiveid?: UserWhereUniqueInput | null;
  status?: "offer" | "rejection" | "agreement" | "cancelation" | null;
  suggestioncategoryid?: CategoryWhereUniqueInput | null;
  suggestionid?: UserWhereUniqueInput | null;
};
