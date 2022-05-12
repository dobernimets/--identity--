import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";

export type DatarequestCreateInput = {
  askid?: UserWhereUniqueInput | null;
  isactivereq?: boolean | null;
  receiveid?: UserWhereUniqueInput | null;
  reqcategoryid?: CategoryWhereUniqueInput | null;
  status?: "request" | "rejection" | "agreement" | "cancelation" | null;
};
