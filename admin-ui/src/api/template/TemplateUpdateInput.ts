import { GroupUpdateManyWithoutTemplatesInput } from "./GroupUpdateManyWithoutTemplatesInput";
import { TemplatecategoryUpdateManyWithoutTemplatesInput } from "./TemplatecategoryUpdateManyWithoutTemplatesInput";

export type TemplateUpdateInput = {
  groups?: GroupUpdateManyWithoutTemplatesInput;
  name?: string | null;
  templatecategories?: TemplatecategoryUpdateManyWithoutTemplatesInput;
};
