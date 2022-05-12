/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { MembergroupCreateNestedManyWithoutGroupsInput } from "./MembergroupCreateNestedManyWithoutGroupsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { TemplateWhereUniqueInput } from "../../template/base/TemplateWhereUniqueInput";
@InputType()
class GroupCreateInput {
  @ApiProperty({
    required: false,
    type: () => MembergroupCreateNestedManyWithoutGroupsInput,
  })
  @ValidateNested()
  @Type(() => MembergroupCreateNestedManyWithoutGroupsInput)
  @IsOptional()
  @Field(() => MembergroupCreateNestedManyWithoutGroupsInput, {
    nullable: true,
  })
  membergroups?: MembergroupCreateNestedManyWithoutGroupsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  namegroup?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  ownerid?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TemplateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TemplateWhereUniqueInput)
  @IsOptional()
  @Field(() => TemplateWhereUniqueInput, {
    nullable: true,
  })
  templateid?: TemplateWhereUniqueInput | null;
}
export { GroupCreateInput };