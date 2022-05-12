import { DatarequestWhereInput } from "./DatarequestWhereInput";
import { DatarequestOrderByInput } from "./DatarequestOrderByInput";

export type DatarequestFindManyArgs = {
  where?: DatarequestWhereInput;
  orderBy?: Array<DatarequestOrderByInput>;
  skip?: number;
  take?: number;
};
