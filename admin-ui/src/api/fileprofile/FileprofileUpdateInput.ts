import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type FileprofileUpdateInput = {
  categoryid?: CategoryWhereUniqueInput | null;
  file?: string | null;
  ispublic?: boolean | null;
  profileid?: ProfileWhereUniqueInput | null;
  title?: string | null;
};
