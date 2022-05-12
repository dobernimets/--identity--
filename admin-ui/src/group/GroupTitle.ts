import { Group as TGroup } from "../api/group/Group";

export const GROUP_TITLE_FIELD = "namegroup";

export const GroupTitle = (record: TGroup): string => {
  return record.namegroup || record.id;
};
