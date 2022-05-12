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
import { IsBoolean, IsOptional, ValidateNested, IsEnum } from "class-validator";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { Type } from "class-transformer";
import { EnumDatasuggestionStatus } from "./EnumDatasuggestionStatus";
import { CategoryWhereUniqueInput } from "../../category/base/CategoryWhereUniqueInput";
@InputType()
class DatasuggestionCreateInput {
  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isactivesuggestion?: boolean | null;

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
  receiveid?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumDatasuggestionStatus,
  })
  @IsEnum(EnumDatasuggestionStatus)
  @IsOptional()
  @Field(() => EnumDatasuggestionStatus, {
    nullable: true,
  })
  status?: "offer" | "rejection" | "agreement" | "cancelation" | null;

  @ApiProperty({
    required: false,
    type: () => CategoryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CategoryWhereUniqueInput)
  @IsOptional()
  @Field(() => CategoryWhereUniqueInput, {
    nullable: true,
  })
  suggestioncategoryid?: CategoryWhereUniqueInput | null;

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
  suggestionid?: UserWhereUniqueInput | null;
}
export { DatasuggestionCreateInput };
