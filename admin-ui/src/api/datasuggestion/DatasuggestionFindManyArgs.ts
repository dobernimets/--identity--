import { DatasuggestionWhereInput } from "./DatasuggestionWhereInput";
import { DatasuggestionOrderByInput } from "./DatasuggestionOrderByInput";

export type DatasuggestionFindManyArgs = {
  where?: DatasuggestionWhereInput;
  orderBy?: Array<DatasuggestionOrderByInput>;
  skip?: number;
  take?: number;
};
