import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type TemplatecategoryCreateInput = {
  caregoryid?: CategoryWhereUniqueInput | null;
  templateid?: TemplateWhereUniqueInput | null;
};
