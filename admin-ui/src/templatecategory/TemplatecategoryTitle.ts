import { Templatecategory as TTemplatecategory } from "../api/templatecategory/Templatecategory";

export const TEMPLATECATEGORY_TITLE_FIELD = "id";

export const TemplatecategoryTitle = (record: TTemplatecategory): string => {
  return record.id || record.id;
};
