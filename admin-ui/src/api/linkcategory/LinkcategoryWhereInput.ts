import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { LinksharingWhereUniqueInput } from "../linksharing/LinksharingWhereUniqueInput";

export type LinkcategoryWhereInput = {
  categoryid?: CategoryWhereUniqueInput;
  id?: StringFilter;
  linkid?: LinksharingWhereUniqueInput;
};
