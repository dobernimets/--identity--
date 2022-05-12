import { TemplatecategoryWhereInput } from "./TemplatecategoryWhereInput";
import { TemplatecategoryOrderByInput } from "./TemplatecategoryOrderByInput";

export type TemplatecategoryFindManyArgs = {
  where?: TemplatecategoryWhereInput;
  orderBy?: Array<TemplatecategoryOrderByInput>;
  skip?: number;
  take?: number;
};
