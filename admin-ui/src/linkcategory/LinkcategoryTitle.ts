import { Linkcategory as TLinkcategory } from "../api/linkcategory/Linkcategory";

export const LINKCATEGORY_TITLE_FIELD = "id";

export const LinkcategoryTitle = (record: TLinkcategory): string => {
  return record.id || record.id;
};
