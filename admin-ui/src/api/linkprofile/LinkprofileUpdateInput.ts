import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type LinkprofileUpdateInput = {
  categoryid?: CategoryWhereUniqueInput | null;
  ispublic?: boolean | null;
  profileid?: ProfileWhereUniqueInput | null;
  title?: string | null;
  url?: string | null;
};
