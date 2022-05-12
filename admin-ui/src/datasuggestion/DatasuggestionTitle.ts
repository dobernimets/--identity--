import { Datasuggestion as TDatasuggestion } from "../api/datasuggestion/Datasuggestion";

export const DATASUGGESTION_TITLE_FIELD = "id";

export const DatasuggestionTitle = (record: TDatasuggestion): string => {
  return record.id || record.id;
};
