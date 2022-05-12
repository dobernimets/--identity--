import { Myidentity as TMyidentity } from "../api/myidentity/Myidentity";

export const MYIDENTITY_TITLE_FIELD = "id";

export const MyidentityTitle = (record: TMyidentity): string => {
  return record.id || record.id;
};
