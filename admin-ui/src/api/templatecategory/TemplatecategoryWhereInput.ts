import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type TemplatecategoryWhereInput = {
  caregoryid?: CategoryWhereUniqueInput;
  id?: StringFilter;
  templateid?: TemplateWhereUniqueInput;
};
