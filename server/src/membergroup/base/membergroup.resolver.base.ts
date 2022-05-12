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
import { CreateMembergroupArgs } from "./CreateMembergroupArgs";
import { UpdateMembergroupArgs } from "./UpdateMembergroupArgs";
import { DeleteMembergroupArgs } from "./DeleteMembergroupArgs";
import { MembergroupFindManyArgs } from "./MembergroupFindManyArgs";
import { MembergroupFindUniqueArgs } from "./MembergroupFindUniqueArgs";
import { Membergroup } from "./Membergroup";
import { Group } from "../../group/base/Group";
import { User } from "../../user/base/User";
import { MembergroupService } from "../membergroup.service";

@graphql.Resolver(() => Membergroup)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MembergroupResolverBase {
  constructor(
    protected readonly service: MembergroupService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Membergroup",
    action: "read",
    possession: "any",
  })
  async _membergroupsMeta(
    @graphql.Args() args: MembergroupFindManyArgs
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
  @graphql.Query(() => [Membergroup])
  @nestAccessControl.UseRoles({
    resource: "Membergroup",
    action: "read",
    possession: "any",
  })
  async membergroups(
    @graphql.Args() args: MembergroupFindManyArgs
  ): Promise<Membergroup[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Membergroup, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Membergroup",
    action: "read",
    possession: "own",
  })
  async membergroup(
    @graphql.Args() args: MembergroupFindUniqueArgs
  ): Promise<Membergroup | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Membergroup)
  @nestAccessControl.UseRoles({
    resource: "Membergroup",
    action: "create",
    possession: "any",
  })
  async createMembergroup(
    @graphql.Args() args: CreateMembergroupArgs
  ): Promise<Membergroup> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        groupid: args.data.groupid
          ? {
              connect: args.data.groupid,
            }
          : undefined,

        memberid: args.data.memberid
          ? {
              connect: args.data.memberid,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Membergroup)
  @nestAccessControl.UseRoles({
    resource: "Membergroup",
    action: "update",
    possession: "any",
  })
  async updateMembergroup(
    @graphql.Args() args: UpdateMembergroupArgs
  ): Promise<Membergroup | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          groupid: args.data.groupid
            ? {
                connect: args.data.groupid,
              }
            : undefined,

          memberid: args.data.memberid
            ? {
                connect: args.data.memberid,
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

  @graphql.Mutation(() => Membergroup)
  @nestAccessControl.UseRoles({
    resource: "Membergroup",
    action: "delete",
    possession: "any",
  })
  async deleteMembergroup(
    @graphql.Args() args: DeleteMembergroupArgs
  ): Promise<Membergroup | null> {
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
  @graphql.ResolveField(() => Group, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Group",
    action: "read",
    possession: "any",
  })
  async groupid(@graphql.Parent() parent: Membergroup): Promise<Group | null> {
    const result = await this.service.getGroupid(parent.id);

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
  async memberid(@graphql.Parent() parent: Membergroup): Promise<User | null> {
    const result = await this.service.getMemberid(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}