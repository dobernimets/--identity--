import { LinkcategoryWhereInput } from "./LinkcategoryWhereInput";
import { LinkcategoryOrderByInput } from "./LinkcategoryOrderByInput";

export type LinkcategoryFindManyArgs = {
  where?: LinkcategoryWhereInput;
  orderBy?: Array<LinkcategoryOrderByInput>;
  skip?: number;
  take?: number;
};
