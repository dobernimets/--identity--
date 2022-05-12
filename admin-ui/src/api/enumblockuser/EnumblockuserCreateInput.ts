import { UserCreateNestedManyWithoutEnumblockusersInput } from "./UserCreateNestedManyWithoutEnumblockusersInput";

export type EnumblockuserCreateInput = {
  statusblock?: "block" | "frozen" | "active" | null;
  users?: UserCreateNestedManyWithoutEnumblockusersInput;
};
