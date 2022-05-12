import { SortOrder } from "../../util/SortOrder";

export type CategoryOrderByInput = {
  categoryname?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
