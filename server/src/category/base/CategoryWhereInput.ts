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
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { Type } from "class-transformer";
import { IsOptional, ValidateNested } from "class-validator";
import { DatarequestListRelationFilter } from "../../datarequest/base/DatarequestListRelationFilter";
import { DatasuggestionListRelationFilter } from "../../datasuggestion/base/DatasuggestionListRelationFilter";
import { FileprofileListRelationFilter } from "../../fileprofile/base/FileprofileListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LinkcategoryListRelationFilter } from "../../linkcategory/base/LinkcategoryListRelationFilter";
import { LinkprofileListRelationFilter } from "../../linkprofile/base/LinkprofileListRelationFilter";
import { ProfileviewListRelationFilter } from "../../profileview/base/ProfileviewListRelationFilter";
import { TemplatecategoryListRelationFilter } from "../../templatecategory/base/TemplatecategoryListRelationFilter";
@InputType()
class CategoryWhereInput {
  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  categoryname?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: () => DatarequestListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DatarequestListRelationFilter)
  @IsOptional()
  @Field(() => DatarequestListRelationFilter, {
    nullable: true,
  })
  datarequests?: DatarequestListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => DatasuggestionListRelationFilter,
  })
  @ValidateNested()
  @Type(() => DatasuggestionListRelationFilter)
  @IsOptional()
  @Field(() => DatasuggestionListRelationFilter, {
    nullable: true,
  })
  datasuggestions?: DatasuggestionListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => FileprofileListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FileprofileListRelationFilter)
  @IsOptional()
  @Field(() => FileprofileListRelationFilter, {
    nullable: true,
  })
  fileprofiles?: FileprofileListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => LinkcategoryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LinkcategoryListRelationFilter)
  @IsOptional()
  @Field(() => LinkcategoryListRelationFilter, {
    nullable: true,
  })
  linkcategories?: LinkcategoryListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => LinkprofileListRelationFilter,
  })
  @ValidateNested()
  @Type(() => LinkprofileListRelationFilter)
  @IsOptional()
  @Field(() => LinkprofileListRelationFilter, {
    nullable: true,
  })
  linkprofiles?: LinkprofileListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => ProfileviewListRelationFilter,
  })
  @ValidateNested()
  @Type(() => ProfileviewListRelationFilter)
  @IsOptional()
  @Field(() => ProfileviewListRelationFilter, {
    nullable: true,
  })
  profileviews?: ProfileviewListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => TemplatecategoryListRelationFilter,
  })
  @ValidateNested()
  @Type(() => TemplatecategoryListRelationFilter)
  @IsOptional()
  @Field(() => TemplatecategoryListRelationFilter, {
    nullable: true,
  })
  templatecategories?: TemplatecategoryListRelationFilter;
}
export { CategoryWhereInput };
