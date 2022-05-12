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
import { CreateProfileArgs } from "./CreateProfileArgs";
import { UpdateProfileArgs } from "./UpdateProfileArgs";
import { DeleteProfileArgs } from "./DeleteProfileArgs";
import { ProfileFindManyArgs } from "./ProfileFindManyArgs";
import { ProfileFindUniqueArgs } from "./ProfileFindUniqueArgs";
import { Profile } from "./Profile";
import { FileprofileFindManyArgs } from "../../fileprofile/base/FileprofileFindManyArgs";
import { Fileprofile } from "../../fileprofile/base/Fileprofile";
import { LinkprofileFindManyArgs } from "../../linkprofile/base/LinkprofileFindManyArgs";
import { Linkprofile } from "../../linkprofile/base/Linkprofile";
import { User } from "../../user/base/User";
import { ProfileService } from "../profile.service";

@graphql.Resolver(() => Profile)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProfileResolverBase {
  constructor(
    protected readonly service: ProfileService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "read",
    possession: "any",
  })
  async _profilesMeta(
    @graphql.Args() args: ProfileFindManyArgs
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
  @graphql.Query(() => [Profile])
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "read",
    possession: "any",
  })
  async profiles(
    @graphql.Args() args: ProfileFindManyArgs
  ): Promise<Profile[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Profile, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "read",
    possession: "own",
  })
  async profile(
    @graphql.Args() args: ProfileFindUniqueArgs
  ): Promise<Profile | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Profile)
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "create",
    possession: "any",
  })
  async createProfile(
    @graphql.Args() args: CreateProfileArgs
  ): Promise<Profile> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        identityid: args.data.identityid
          ? {
              connect: args.data.identityid,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Profile)
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "update",
    possession: "any",
  })
  async updateProfile(
    @graphql.Args() args: UpdateProfileArgs
  ): Promise<Profile | null> {
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

  @graphql.Mutation(() => Profile)
  @nestAccessControl.UseRoles({
    resource: "Profile",
    action: "delete",
    possession: "any",
  })
  async deleteProfile(
    @graphql.Args() args: DeleteProfileArgs
  ): Promise<Profile | null> {
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
  @graphql.ResolveField(() => [Fileprofile])
  @nestAccessControl.UseRoles({
    resource: "Fileprofile",
    action: "read",
    possession: "any",
  })
  async fileprofiles(
    @graphql.Parent() parent: Profile,
    @graphql.Args() args: FileprofileFindManyArgs
  ): Promise<Fileprofile[]> {
    const results = await this.service.findFileprofiles(parent.id, args);

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
    @graphql.Parent() parent: Profile,
    @graphql.Args() args: LinkprofileFindManyArgs
  ): Promise<Linkprofile[]> {
    const results = await this.service.findLinkprofiles(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => User, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "User",
    action: "read",
    possession: "any",
  })
  async identityid(@graphql.Parent() parent: Profile): Promise<User | null> {
    const result = await this.service.getIdentityid(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
