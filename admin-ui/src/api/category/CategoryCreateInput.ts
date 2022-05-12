import { DatarequestCreateNestedManyWithoutCategoriesInput } from "./DatarequestCreateNestedManyWithoutCategoriesInput";
import { DatasuggestionCreateNestedManyWithoutCategoriesInput } from "./DatasuggestionCreateNestedManyWithoutCategoriesInput";
import { FileprofileCreateNestedManyWithoutCategoriesInput } from "./FileprofileCreateNestedManyWithoutCategoriesInput";
import { LinkcategoryCreateNestedManyWithoutCategoriesInput } from "./LinkcategoryCreateNestedManyWithoutCategoriesInput";
import { LinkprofileCreateNestedManyWithoutCategoriesInput } from "./LinkprofileCreateNestedManyWithoutCategoriesInput";
import { ProfileviewCreateNestedManyWithoutCategoriesInput } from "./ProfileviewCreateNestedManyWithoutCategoriesInput";
import { TemplatecategoryCreateNestedManyWithoutCategoriesInput } from "./TemplatecategoryCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  categoryname?: string | null;
  datarequests?: DatarequestCreateNestedManyWithoutCategoriesInput;
  datasuggestions?: DatasuggestionCreateNestedManyWithoutCategoriesInput;
  fileprofiles?: FileprofileCreateNestedManyWithoutCategoriesInput;
  linkcategories?: LinkcategoryCreateNestedManyWithoutCategoriesInput;
  linkprofiles?: LinkprofileCreateNestedManyWithoutCategoriesInput;
  profileviews?: ProfileviewCreateNestedManyWithoutCategoriesInput;
  templatecategories?: TemplatecategoryCreateNestedManyWithoutCategoriesInput;
};
