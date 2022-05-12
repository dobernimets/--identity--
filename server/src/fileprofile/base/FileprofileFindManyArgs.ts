/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FileprofileWhereInput } from "./FileprofileWhereInput";
import { Type } from "class-transformer";
import { FileprofileOrderByInput } from "./FileprofileOrderByInput";

@ArgsType()
class FileprofileFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FileprofileWhereInput,
  })
  @Field(() => FileprofileWhereInput, { nullable: true })
  @Type(() => FileprofileWhereInput)
  where?: FileprofileWhereInput;

  @ApiProperty({
    required: false,
    type: [FileprofileOrderByInput],
  })
  @Field(() => [FileprofileOrderByInput], { nullable: true })
  @Type(() => FileprofileOrderByInput)
  orderBy?: Array<FileprofileOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FileprofileFindManyArgs };