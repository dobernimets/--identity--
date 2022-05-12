import { GroupListRelationFilter } from "../group/GroupListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TemplatecategoryListRelationFilter } from "../templatecategory/TemplatecategoryListRelationFilter";

export type TemplateWhereInput = {
  groups?: GroupListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  templatecategories?: TemplatecategoryListRelationFilter;
};
