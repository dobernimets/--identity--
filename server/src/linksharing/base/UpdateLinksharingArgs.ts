/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { LinksharingWhereUniqueInput } from "./LinksharingWhereUniqueInput";
import { LinksharingUpdateInput } from "./LinksharingUpdateInput";

@ArgsType()
class UpdateLinksharingArgs {
  @Field(() => LinksharingWhereUniqueInput, { nullable: false })
  where!: LinksharingWhereUniqueInput;
  @Field(() => LinksharingUpdateInput, { nullable: false })
  data!: LinksharingUpdateInput;
}

export { UpdateLinksharingArgs };
