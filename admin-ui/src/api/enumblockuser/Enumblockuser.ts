import { User } from "../user/User";

export type Enumblockuser = {
  createdAt: Date;
  id: string;
  statusblock?: "block" | "frozen" | "active" | null;
  updatedAt: Date;
  users?: Array<User>;
};
