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
import { ProfileviewWhereInput } from "./ProfileviewWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProfileviewListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProfileviewWhereInput,
  })
  @ValidateNested()
  @Type(() => ProfileviewWhereInput)
  @IsOptional()
  @Field(() => ProfileviewWhereInput, {
    nullable: true,
  })
  every?: ProfileviewWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProfileviewWhereInput,
  })
  @ValidateNested()
  @Type(() => ProfileviewWhereInput)
  @IsOptional()
  @Field(() => ProfileviewWhereInput, {
    nullable: true,
  })
  some?: ProfileviewWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProfileviewWhereInput,
  })
  @ValidateNested()
  @Type(() => ProfileviewWhereInput)
  @IsOptional()
  @Field(() => ProfileviewWhereInput, {
    nullable: true,
  })
  none?: ProfileviewWhereInput;
}
export { ProfileviewListRelationFilter };
