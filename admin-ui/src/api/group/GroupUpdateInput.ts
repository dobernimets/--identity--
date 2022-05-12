import { MembergroupUpdateManyWithoutGroupsInput } from "./MembergroupUpdateManyWithoutGroupsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type GroupUpdateInput = {
  membergroups?: MembergroupUpdateManyWithoutGroupsInput;
  namegroup?: string | null;
  ownerid?: UserWhereUniqueInput | null;
  templateid?: TemplateWhereUniqueInput | null;
};
