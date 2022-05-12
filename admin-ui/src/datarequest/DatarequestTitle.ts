import { Datarequest as TDatarequest } from "../api/datarequest/Datarequest";

export const DATAREQUEST_TITLE_FIELD = "id";

export const DatarequestTitle = (record: TDatarequest): string => {
  return record.id || record.id;
};
