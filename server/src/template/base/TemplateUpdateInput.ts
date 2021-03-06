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
import { GroupUpdateManyWithoutTemplatesInput } from "./GroupUpdateManyWithoutTemplatesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { TemplatecategoryUpdateManyWithoutTemplatesInput } from "./TemplatecategoryUpdateManyWithoutTemplatesInput";
@InputType()
class TemplateUpdateInput {
  @ApiProperty({
    required: false,
    type: () => GroupUpdateManyWithoutTemplatesInput,
  })
  @ValidateNested()
  @Type(() => GroupUpdateManyWithoutTemplatesInput)
  @IsOptional()
  @Field(() => GroupUpdateManyWithoutTemplatesInput, {
    nullable: true,
  })
  groups?: GroupUpdateManyWithoutTemplatesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => TemplatecategoryUpdateManyWithoutTemplatesInput,
  })
  @ValidateNested()
  @Type(() => TemplatecategoryUpdateManyWithoutTemplatesInput)
  @IsOptional()
  @Field(() => TemplatecategoryUpdateManyWithoutTemplatesInput, {
    nullable: true,
  })
  templatecategories?: TemplatecategoryUpdateManyWithoutTemplatesInput;
}
export { TemplateUpdateInput };
