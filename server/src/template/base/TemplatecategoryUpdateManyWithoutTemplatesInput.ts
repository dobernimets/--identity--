/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { TemplatecategoryWhereUniqueInput } from "../../templatecategory/base/TemplatecategoryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class TemplatecategoryUpdateManyWithoutTemplatesInput {
  @Field(() => [TemplatecategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TemplatecategoryWhereUniqueInput],
  })
  connect?: Array<TemplatecategoryWhereUniqueInput>;

  @Field(() => [TemplatecategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TemplatecategoryWhereUniqueInput],
  })
  disconnect?: Array<TemplatecategoryWhereUniqueInput>;

  @Field(() => [TemplatecategoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [TemplatecategoryWhereUniqueInput],
  })
  set?: Array<TemplatecategoryWhereUniqueInput>;
}
export { TemplatecategoryUpdateManyWithoutTemplatesInput };
