import { MembergroupCreateNestedManyWithoutGroupsInput } from "./MembergroupCreateNestedManyWithoutGroupsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type GroupCreateInput = {
  membergroups?: MembergroupCreateNestedManyWithoutGroupsInput;
  namegroup?: string | null;
  ownerid?: UserWhereUniqueInput | null;
  templateid?: TemplateWhereUniqueInput | null;
};
