import { Membergroup as TMembergroup } from "../api/membergroup/Membergroup";

export const MEMBERGROUP_TITLE_FIELD = "id";

export const MembergroupTitle = (record: TMembergroup): string => {
  return record.id || record.id;
};
