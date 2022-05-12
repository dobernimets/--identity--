import { Profileview as TProfileview } from "../api/profileview/Profileview";

export const PROFILEVIEW_TITLE_FIELD = "id";

export const ProfileviewTitle = (record: TProfileview): string => {
  return record.id || record.id;
};
