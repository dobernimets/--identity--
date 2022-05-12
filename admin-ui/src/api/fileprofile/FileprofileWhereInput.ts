import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { ProfileWhereUniqueInput } from "../profile/ProfileWhereUniqueInput";

export type FileprofileWhereInput = {
  categoryid?: CategoryWhereUniqueInput;
  file?: StringNullableFilter;
  id?: StringFilter;
  ispublic?: BooleanNullableFilter;
  profileid?: ProfileWhereUniqueInput;
  title?: StringNullableFilter;
};
