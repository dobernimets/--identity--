import { StringFilter } from "../../util/StringFilter";
import { MembergroupListRelationFilter } from "../membergroup/MembergroupListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type GroupWhereInput = {
  id?: StringFilter;
  membergroups?: MembergroupListRelationFilter;
  namegroup?: StringNullableFilter;
  ownerid?: UserWhereUniqueInput;
  templateid?: TemplateWhereUniqueInput;
};
