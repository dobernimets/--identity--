import { LinkcategoryCreateNestedManyWithoutLinksharingsInput } from "./LinkcategoryCreateNestedManyWithoutLinksharingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LinksharingCreateInput = {
  expiration?: Date | null;
  link?: string | null;
  linkcategories?: LinkcategoryCreateNestedManyWithoutLinksharingsInput;
  sharingid?: UserWhereUniqueInput | null;
};
