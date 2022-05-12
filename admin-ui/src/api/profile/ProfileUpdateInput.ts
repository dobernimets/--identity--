import { FileprofileUpdateManyWithoutProfilesInput } from "./FileprofileUpdateManyWithoutProfilesInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { LinkprofileUpdateManyWithoutProfilesInput } from "./LinkprofileUpdateManyWithoutProfilesInput";

export type ProfileUpdateInput = {
  content?: string | null;
  fileprofiles?: FileprofileUpdateManyWithoutProfilesInput;
  identityid?: UserWhereUniqueInput | null;
  linkprofiles?: LinkprofileUpdateManyWithoutProfilesInput;
  title?: string | null;
};
