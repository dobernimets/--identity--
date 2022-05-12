import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type EnumblockuserWhereInput = {
  id?: StringFilter;
  statusblock?: "block" | "frozen" | "active";
  users?: UserListRelationFilter;
};
