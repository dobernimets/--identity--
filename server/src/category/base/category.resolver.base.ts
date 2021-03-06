/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateCategoryArgs } from "./CreateCategoryArgs";
import { UpdateCategoryArgs } from "./UpdateCategoryArgs";
import { DeleteCategoryArgs } from "./DeleteCategoryArgs";
import { CategoryFindManyArgs } from "./CategoryFindManyArgs";
import { CategoryFindUniqueArgs } from "./CategoryFindUniqueArgs";
import { Category } from "./Category";
import { DatarequestFindManyArgs } from "../../datarequest/base/DatarequestFindManyArgs";
import { Datarequest } from "../../datarequest/base/Datarequest";
import { DatasuggestionFindManyArgs } from "../../datasuggestion/base/DatasuggestionFindManyArgs";
import { Datasuggestion } from "../../datasuggestion/base/Datasuggestion";
import { FileprofileFindManyArgs } from "../../fileprofile/base/FileprofileFindManyArgs";
import { Fileprofile } from "../../fileprofile/base/Fileprofile";
import { LinkcategoryFindManyArgs } from "../../linkcategory/base/LinkcategoryFindManyArgs";
import { Linkcategory } from "../../linkcategory/base/Linkcategory";
import { LinkprofileFindManyArgs } from "../../linkprofile/base/LinkprofileFindManyArgs";
import { Linkprofile } from "../../linkprofile/base/Linkprofile";
import { ProfileviewFindManyArgs } from "../../profileview/base/ProfileviewFindManyArgs";
import { Profileview } from "../../profileview/base/Profileview";
import { TemplatecategoryFindManyArgs } from "../../templatecategory/base/TemplatecategoryFindManyArgs";
import { Templatecategory } from "../../templatecategory/base/Templatecategory";
import { CategoryService } from "../category.service";

@graphql.Resolver(() => Category)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class CategoryResolverBase {
  constructor(
    protected readonly service: CategoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "any",
  })
  async _categoriesMeta(
    @graphql.Args() args: CategoryFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Category])
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "any",
  })
  async categories(
    @graphql.Args() args: CategoryFindManyArgs
  ): Promise<Category[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Category, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "own",
  })
  async category(
    @graphql.Args() args: CategoryFindUniqueArgs
  ): Promise<Category | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Category)
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "create",
    possession: "any",
  })
  async createCategory(
    @graphql.Args() args: CreateCategoryArgs
  ): Promise<Category> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Category)
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "update",
    possession: "any",
  })
  async updateCategory(
    @graphql.Args() args: UpdateCategoryArgs
  ): Promise<Category | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Category)
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "delete",
    possession: "any",
  })
  async deleteCategory(
    @graphql.Args() args: DeleteCategoryArgs
  ): Promise<Category | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Datarequest])
  @nestAccessControl.UseRoles({
    resource: "Datarequest",
    action: "read",
    possession: "any",
  })
  async datarequests(
    @graphql.Parent() parent: Category,
    @graphql.Args() args: DatarequestFindManyArgs
  ): Promise<Datarequest[]> {
    const results = await this.service.findDatarequests(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Datasuggestion])
  @nestAccessControl.UseRoles({
    resource: "Datasuggestion",
    action: "read",
    possession: "any",
  })
  async datasuggestions(
    @graphql.Parent() parent: Category,
    @graphql.Args() args: DatasuggestionFindManyArgs
  ): Promise<Datasuggestion[]> {
    const results = await this.service.findDatasuggestions(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Fileprofile])
  @nestAccessControl.UseRoles({
    resource: "Fileprofile",
    action: "read",
    possession: "any",
  })
  async fileprofiles(
    @graphql.Parent() parent: Category,
    @graphql.Args() args: FileprofileFindManyArgs
  ): Promise<Fileprofile[]> {
    const results = await this.service.findFileprofiles(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Linkcategory])
  @nestAccessControl.UseRoles({
    resource: "Linkcategory",
    action: "read",
    possession: "any",
  })
  async linkcategories(
    @graphql.Parent() parent: Category,
    @graphql.Args() args: LinkcategoryFindManyArgs
  ): Promise<Linkcategory[]> {
    const results = await this.service.findLinkcategories(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Linkprofile])
  @nestAccessControl.UseRoles({
    resource: "Linkprofile",
    action: "read",
    possession: "any",
  })
  async linkprofiles(
    @graphql.Parent() parent: Category,
    @graphql.Args() args: LinkprofileFindManyArgs
  ): Promise<Linkprofile[]> {
    const results = await this.service.findLinkprofiles(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Profileview])
  @nestAccessControl.UseRoles({
    resource: "Profileview",
    action: "read",
    possession: "any",
  })
  async profileviews(
    @graphql.Parent() parent: Category,
    @graphql.Args() args: ProfileviewFindManyArgs
  ): Promise<Profileview[]> {
    const results = await this.service.findProfileviews(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Templatecategory])
  @nestAccessControl.UseRoles({
    resource: "Templatecategory",
    action: "read",
    possession: "any",
  })
  async templatecategories(
    @graphql.Parent() parent: Category,
    @graphql.Args() args: TemplatecategoryFindManyArgs
  ): Promise<Templatecategory[]> {
    const results = await this.service.findTemplatecategories(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
