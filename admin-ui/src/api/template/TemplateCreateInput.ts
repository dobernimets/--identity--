import { GroupCreateNestedManyWithoutTemplatesInput } from "./GroupCreateNestedManyWithoutTemplatesInput";
import { TemplatecategoryCreateNestedManyWithoutTemplatesInput } from "./TemplatecategoryCreateNestedManyWithoutTemplatesInput";

export type TemplateCreateInput = {
  groups?: GroupCreateNestedManyWithoutTemplatesInput;
  name?: string | null;
  templatecategories?: TemplatecategoryCreateNestedManyWithoutTemplatesInput;
};
