import { MyidentityWhereInput } from "./MyidentityWhereInput";
import { MyidentityOrderByInput } from "./MyidentityOrderByInput";

export type MyidentityFindManyArgs = {
  where?: MyidentityWhereInput;
  orderBy?: Array<MyidentityOrderByInput>;
  skip?: number;
  take?: number;
};
