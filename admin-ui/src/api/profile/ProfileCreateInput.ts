import { FileprofileCreateNestedManyWithoutProfilesInput } from "./FileprofileCreateNestedManyWithoutProfilesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { LinkprofileCreateNestedManyWithoutProfilesInput } from "./LinkprofileCreateNestedManyWithoutProfilesInput";

export type ProfileCreateInput = {
  content?: string | null;
  fileprofiles?: FileprofileCreateNestedManyWithoutProfilesInput;
  identityid?: UserWhereUniqueInput | null;
  linkprofiles?: LinkprofileCreateNestedManyWithoutProfilesInput;
  title?: string | null;
};
