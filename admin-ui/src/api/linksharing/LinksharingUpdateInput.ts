import { LinkcategoryUpdateManyWithoutLinksharingsInput } from "./LinkcategoryUpdateManyWithoutLinksharingsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LinksharingUpdateInput = {
  expiration?: Date | null;
  link?: string | null;
  linkcategories?: LinkcategoryUpdateManyWithoutLinksharingsInput;
  sharingid?: UserWhereUniqueInput | null;
};
