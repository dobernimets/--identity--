import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FileprofileListRelationFilter } from "../fileprofile/FileprofileListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { LinkprofileListRelationFilter } from "../linkprofile/LinkprofileListRelationFilter";

export type ProfileWhereInput = {
  content?: StringNullableFilter;
  fileprofiles?: FileprofileListRelationFilter;
  id?: StringFilter;
  identityid?: UserWhereUniqueInput;
  linkprofiles?: LinkprofileListRelationFilter;
  title?: StringNullableFilter;
};
