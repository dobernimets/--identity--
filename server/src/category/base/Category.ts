/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, IsDate, ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { Datarequest } from "../../datarequest/base/Datarequest";
import { Datasuggestion } from "../../datasuggestion/base/Datasuggestion";
import { Fileprofile } from "../../fileprofile/base/Fileprofile";
import { Linkcategory } from "../../linkcategory/base/Linkcategory";
import { Linkprofile } from "../../linkprofile/base/Linkprofile";
import { Profileview } from "../../profileview/base/Profileview";
import { Templatecategory } from "../../templatecategory/base/Templatecategory";
@ObjectType()
class Category {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  categoryname!: string | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: false,
    type: () => [Datarequest],
  })
  @ValidateNested()
  @Type(() => Datarequest)
  @IsOptional()
  datarequests?: Array<Datarequest>;

  @ApiProperty({
    required: false,
    type: () => [Datasuggestion],
  })
  @ValidateNested()
  @Type(() => Datasuggestion)
  @IsOptional()
  datasuggestions?: Array<Datasuggestion>;

  @ApiProperty({
    required: false,
    type: () => [Fileprofile],
  })
  @ValidateNested()
  @Type(() => Fileprofile)
  @IsOptional()
  fileprofiles?: Array<Fileprofile>;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => [Linkcategory],
  })
  @ValidateNested()
  @Type(() => Linkcategory)
  @IsOptional()
  linkcategories?: Array<Linkcategory>;

  @ApiProperty({
    required: false,
    type: () => [Linkprofile],
  })
  @ValidateNested()
  @Type(() => Linkprofile)
  @IsOptional()
  linkprofiles?: Array<Linkprofile>;

  @ApiProperty({
    required: false,
    type: () => [Profileview],
  })
  @ValidateNested()
  @Type(() => Profileview)
  @IsOptional()
  profileviews?: Array<Profileview>;

  @ApiProperty({
    required: false,
    type: () => [Templatecategory],
  })
  @ValidateNested()
  @Type(() => Templatecategory)
  @IsOptional()
  templatecategories?: Array<Templatecategory>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Category };
