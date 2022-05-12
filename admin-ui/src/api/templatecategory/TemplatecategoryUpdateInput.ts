import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { TemplateWhereUniqueInput } from "../template/TemplateWhereUniqueInput";

export type TemplatecategoryUpdateInput = {
  caregoryid?: CategoryWhereUniqueInput | null;
  templateid?: TemplateWhereUniqueInput | null;
};
