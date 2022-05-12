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
import { TemplateWhereInput } from "./TemplateWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class TemplateListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => TemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => TemplateWhereInput)
  @IsOptional()
  @Field(() => TemplateWhereInput, {
    nullable: true,
  })
  every?: TemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => TemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => TemplateWhereInput)
  @IsOptional()
  @Field(() => TemplateWhereInput, {
    nullable: true,
  })
  some?: TemplateWhereInput;

  @ApiProperty({
    required: false,
    type: () => TemplateWhereInput,
  })
  @ValidateNested()
  @Type(() => TemplateWhereInput)
  @IsOptional()
  @Field(() => TemplateWhereInput, {
    nullable: true,
  })
  none?: TemplateWhereInput;
}
export { TemplateListRelationFilter };
