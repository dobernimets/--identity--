import { DatarequestUpdateManyWithoutCategoriesInput } from "./DatarequestUpdateManyWithoutCategoriesInput";
import { DatasuggestionUpdateManyWithoutCategoriesInput } from "./DatasuggestionUpdateManyWithoutCategoriesInput";
import { FileprofileUpdateManyWithoutCategoriesInput } from "./FileprofileUpdateManyWithoutCategoriesInput";
import { LinkcategoryUpdateManyWithoutCategoriesInput } from "./LinkcategoryUpdateManyWithoutCategoriesInput";
import { LinkprofileUpdateManyWithoutCategoriesInput } from "./LinkprofileUpdateManyWithoutCategoriesInput";
import { ProfileviewUpdateManyWithoutCategoriesInput } from "./ProfileviewUpdateManyWithoutCategoriesInput";
import { TemplatecategoryUpdateManyWithoutCategoriesInput } from "./TemplatecategoryUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  categoryname?: string | null;
  datarequests?: DatarequestUpdateManyWithoutCategoriesInput;
  datasuggestions?: DatasuggestionUpdateManyWithoutCategoriesInput;
  fileprofiles?: FileprofileUpdateManyWithoutCategoriesInput;
  linkcategories?: LinkcategoryUpdateManyWithoutCategoriesInput;
  linkprofiles?: LinkprofileUpdateManyWithoutCategoriesInput;
  profileviews?: ProfileviewUpdateManyWithoutCategoriesInput;
  templatecategories?: TemplatecategoryUpdateManyWithoutCategoriesInput;
};
