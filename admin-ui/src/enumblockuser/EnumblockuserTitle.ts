import { Enumblockuser as TEnumblockuser } from "../api/enumblockuser/Enumblockuser";

export const ENUMBLOCKUSER_TITLE_FIELD = "id";

export const EnumblockuserTitle = (record: TEnumblockuser): string => {
  return record.id || record.id;
};
