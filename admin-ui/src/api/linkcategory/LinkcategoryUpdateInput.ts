import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { LinksharingWhereUniqueInput } from "../linksharing/LinksharingWhereUniqueInput";

export type LinkcategoryUpdateInput = {
  categoryid?: CategoryWhereUniqueInput | null;
  linkid?: LinksharingWhereUniqueInput | null;
};
