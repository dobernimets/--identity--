import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { LinksharingWhereUniqueInput } from "../linksharing/LinksharingWhereUniqueInput";

export type LinkcategoryCreateInput = {
  categoryid?: CategoryWhereUniqueInput | null;
  linkid?: LinksharingWhereUniqueInput | null;
};
