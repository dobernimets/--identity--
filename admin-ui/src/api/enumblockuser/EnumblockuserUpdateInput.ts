import { UserUpdateManyWithoutEnumblockusersInput } from "./UserUpdateManyWithoutEnumblockusersInput";

export type EnumblockuserUpdateInput = {
  statusblock?: "block" | "frozen" | "active" | null;
  users?: UserUpdateManyWithoutEnumblockusersInput;
};
