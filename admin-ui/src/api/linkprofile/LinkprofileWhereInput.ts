import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type LinkprofileWhereInput = {
  categoryid?: CategoryWhereUniqueInput;
  id?: StringFilter;
  ispublic?: BooleanNullableFilter;
  profileid?: ProfileWhereUniqueInput;
  title?: StringNullableFilter;
  url?: StringNullableFilter;
};
