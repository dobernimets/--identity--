import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { LinkcategoryListRelationFilter } from "../linkcategory/LinkcategoryListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LinksharingWhereInput = {
  expiration?: DateTimeNullableFilter;
  id?: StringFilter;
  link?: StringNullableFilter;
  linkcategories?: LinkcategoryListRelationFilter;
  sharingid?: UserWhereUniqueInput;
};
