/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ProfileviewWhereUniqueInput } from "../../profileview/base/ProfileviewWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class ProfileviewUpdateManyWithoutUsersInput {
  @Field(() => [ProfileviewWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProfileviewWhereUniqueInput],
  })
  connect?: Array<ProfileviewWhereUniqueInput>;

  @Field(() => [ProfileviewWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProfileviewWhereUniqueInput],
  })
  disconnect?: Array<ProfileviewWhereUniqueInput>;

  @Field(() => [ProfileviewWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [ProfileviewWhereUniqueInput],
  })
  set?: Array<ProfileviewWhereUniqueInput>;
}
export { ProfileviewUpdateManyWithoutUsersInput };