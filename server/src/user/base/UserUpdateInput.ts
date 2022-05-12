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
import {
  IsString,
  IsOptional,
  ValidateNested,
  IsBoolean,
} from "class-validator";
import { DatarequestUpdateManyWithoutUsersInput } from "./DatarequestUpdateManyWithoutUsersInput";
import { Type } from "class-transformer";
import { DatasuggestionUpdateManyWithoutUsersInput } from "./DatasuggestionUpdateManyWithoutUsersInput";
import { GroupUpdateManyWithoutUsersInput } from "./GroupUpdateManyWithoutUsersInput";
import { EnumblockuserWhereUniqueInput } from "../../enumblockuser/base/EnumblockuserWhereUniqueInput";
import { LinksharingUpdateManyWithoutUsersInput } from "./LinksharingUpdateManyWithoutUsersInput";
import { MembergroupUpdateManyWithoutUsersInput } from "./MembergroupUpdateManyWithoutUsersInput";
import { MyidentityUpdateManyWithoutUsersInput } from "./MyidentityUpdateManyWithoutUsersInput";
import { ProfileUpdateManyWithoutUsersInput } from "./ProfileUpdateManyWithoutUsersInput";
import { ProfileviewUpdateManyWithoutUsersInput } from "./ProfileviewUpdateManyWithoutUsersInput";
@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  apartment?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  city?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  country?: string | null;

  @ApiProperty({
    required: false,
    type: () => DatarequestUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => DatarequestUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => DatarequestUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  datarequestsaskid?: DatarequestUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => DatarequestUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => DatarequestUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => DatarequestUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  datarequestsreceiveid?: DatarequestUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => DatasuggestionUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => DatasuggestionUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => DatasuggestionUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  datasuggestionsreceiveid?: DatasuggestionUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => DatasuggestionUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => DatasuggestionUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => DatasuggestionUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  datasuggestionssuggestionid?: DatasuggestionUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: () => GroupUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => GroupUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => GroupUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  groupsownerid?: GroupUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  housnumber?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  image?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isactive?: boolean | null;

  @ApiProperty({
    required: false,
    type: () => EnumblockuserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => EnumblockuserWhereUniqueInput)
  @IsOptional()
  @Field(() => EnumblockuserWhereUniqueInput, {
    nullable: true,
  })
  isblocked?: EnumblockuserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isregistered?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: () => LinksharingUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => LinksharingUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => LinksharingUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  linksharings?: LinksharingUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => MembergroupUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => MembergroupUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => MembergroupUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  membergroups?: MembergroupUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => MyidentityUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => MyidentityUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => MyidentityUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  myidentitiesidentityid?: MyidentityUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => MyidentityUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => MyidentityUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => MyidentityUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  myidentitiesmyidentitycontactid?: MyidentityUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phone?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProfileUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ProfileUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ProfileUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  profiles?: ProfileUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ProfileviewUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ProfileviewUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ProfileviewUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  profileviewsidentityid?: ProfileviewUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => ProfileviewUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => ProfileviewUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => ProfileviewUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  profileviewswatchid?: ProfileviewUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: [String],
  })
  @IsString({
    each: true,
  })
  @IsOptional()
  @Field(() => [String], {
    nullable: true,
  })
  roles?: Array<string>;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  street?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;
}
export { UserUpdateInput };
