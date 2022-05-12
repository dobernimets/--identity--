import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DatarequestListRelationFilter } from "../datarequest/DatarequestListRelationFilter";
import { DatasuggestionListRelationFilter } from "../datasuggestion/DatasuggestionListRelationFilter";
import { FileprofileListRelationFilter } from "../fileprofile/FileprofileListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LinkcategoryListRelationFilter } from "../linkcategory/LinkcategoryListRelationFilter";
import { LinkprofileListRelationFilter } from "../linkprofile/LinkprofileListRelationFilter";
import { ProfileviewListRelationFilter } from "../profileview/ProfileviewListRelationFilter";
import { TemplatecategoryListRelationFilter } from "../templatecategory/TemplatecategoryListRelationFilter";

export type CategoryWhereInput = {
  categoryname?: StringNullableFilter;
  datarequests?: DatarequestListRelationFilter;
  datasuggestions?: DatasuggestionListRelationFilter;
  fileprofiles?: FileprofileListRelationFilter;
  id?: StringFilter;
  linkcategories?: LinkcategoryListRelationFilter;
  linkprofiles?: LinkprofileListRelationFilter;
  profileviews?: ProfileviewListRelationFilter;
  templatecategories?: TemplatecategoryListRelationFilter;
};
