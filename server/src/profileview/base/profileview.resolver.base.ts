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
import { CreateProfileviewArgs } from "./CreateProfileviewArgs";
import { UpdateProfileviewArgs } from "./UpdateProfileviewArgs";
import { DeleteProfileviewArgs } from "./DeleteProfileviewArgs";
import { ProfileviewFindManyArgs } from "./ProfileviewFindManyArgs";
import { ProfileviewFindUniqueArgs } from "./ProfileviewFindUniqueArgs";
import { Profileview } from "./Profileview";
import { User } from "../../user/base/User";
import { Category } from "../../category/base/Category";
import { ProfileviewService } from "../profileview.service";

@graphql.Resolver(() => Profileview)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProfileviewResolverBase {
  constructor(
    protected readonly service: ProfileviewService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Profileview",
    action: "read",
    possession: "any",
  })
  async _profileviewsMeta(
    @graphql.Args() args: ProfileviewFindManyArgs
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
  @graphql.Query(() => [Profileview])
  @nestAccessControl.UseRoles({
    resource: "Profileview",
    action: "read",
    possession: "any",
  })
  async profileviews(
    @graphql.Args() args: ProfileviewFindManyArgs
  ): Promise<Profileview[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Profileview, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Profileview",
    action: "read",
    possession: "own",
  })
  async profileview(
    @graphql.Args() args: ProfileviewFindUniqueArgs
  ): Promise<Profileview | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Profileview)
  @nestAccessControl.UseRoles({
    resource: "Profileview",
    action: "create",
    possession: "any",
  })
  async createProfileview(
    @graphql.Args() args: CreateProfileviewArgs
  ): Promise<Profileview> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        identityid: args.data.identityid
          ? {
              connect: args.data.identityid,
            }
          : undefined,

        viewcategoryid: args.data.viewcategoryid
          ? {
              connect: args.data.viewcategoryid,
            }
          : undefined,

        watchid: args.data.watchid
          ? {
              connect: args.data.watchid,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Profileview)
  @nestAccessControl.UseRoles({
    resource: "Profileview",
    action: "update",
    possession: "any",
  })
  async updateProfileview(
    @graphql.Args() args: UpdateProfileviewArgs
  ): Promise<Profileview | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          identityid: args.data.identityid
            ? {
                connect: args.data.identityid,
              }
            : undefined,

          viewcategoryid: args.data.viewcategoryid
            ? {
                connect: args.data.viewcategoryid,
              }
            : undefined,

          watchid: args.data.watchid
            ? {
                connect: args.data.watchid,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Profileview)
  @nestAccessControl.UseRoles({
    resource: "Profileview",
    action: "delete",
    possession: "any",
  })
  async deleteProfileview(
    @graphql.Args() args: DeleteProfileviewArgs
  ): Promise<Profileview | null> {
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
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async identityid(
    @graphql.Parent() parent: Profileview
  ): Promise<User | null> {
    const result = await this.service.getIdentityid(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Category, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "any",
  })
  async viewcategoryid(
    @graphql.Parent() parent: Profileview
  ): Promise<Category | null> {
    const result = await this.service.getViewcategoryid(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async watchid(@graphql.Parent() parent: Profileview): Promise<User | null> {
    const result = await this.service.getWatchid(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
