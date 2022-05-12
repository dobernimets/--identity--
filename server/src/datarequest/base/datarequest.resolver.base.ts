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
import { CreateDatarequestArgs } from "./CreateDatarequestArgs";
import { UpdateDatarequestArgs } from "./UpdateDatarequestArgs";
import { DeleteDatarequestArgs } from "./DeleteDatarequestArgs";
import { DatarequestFindManyArgs } from "./DatarequestFindManyArgs";
import { DatarequestFindUniqueArgs } from "./DatarequestFindUniqueArgs";
import { Datarequest } from "./Datarequest";
import { User } from "../../user/base/User";
import { Category } from "../../category/base/Category";
import { DatarequestService } from "../datarequest.service";

@graphql.Resolver(() => Datarequest)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DatarequestResolverBase {
  constructor(
    protected readonly service: DatarequestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Datarequest",
    action: "read",
    possession: "any",
  })
  async _datarequestsMeta(
    @graphql.Args() args: DatarequestFindManyArgs
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
  @graphql.Query(() => [Datarequest])
  @nestAccessControl.UseRoles({
    resource: "Datarequest",
    action: "read",
    possession: "any",
  })
  async datarequests(
    @graphql.Args() args: DatarequestFindManyArgs
  ): Promise<Datarequest[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Datarequest, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Datarequest",
    action: "read",
    possession: "own",
  })
  async datarequest(
    @graphql.Args() args: DatarequestFindUniqueArgs
  ): Promise<Datarequest | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Datarequest)
  @nestAccessControl.UseRoles({
    resource: "Datarequest",
    action: "create",
    possession: "any",
  })
  async createDatarequest(
    @graphql.Args() args: CreateDatarequestArgs
  ): Promise<Datarequest> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        askid: args.data.askid
          ? {
              connect: args.data.askid,
            }
          : undefined,

        receiveid: args.data.receiveid
          ? {
              connect: args.data.receiveid,
            }
          : undefined,

        reqcategoryid: args.data.reqcategoryid
          ? {
              connect: args.data.reqcategoryid,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Datarequest)
  @nestAccessControl.UseRoles({
    resource: "Datarequest",
    action: "update",
    possession: "any",
  })
  async updateDatarequest(
    @graphql.Args() args: UpdateDatarequestArgs
  ): Promise<Datarequest | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          askid: args.data.askid
            ? {
                connect: args.data.askid,
              }
            : undefined,

          receiveid: args.data.receiveid
            ? {
                connect: args.data.receiveid,
              }
            : undefined,

          reqcategoryid: args.data.reqcategoryid
            ? {
                connect: args.data.reqcategoryid,
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

  @graphql.Mutation(() => Datarequest)
  @nestAccessControl.UseRoles({
    resource: "Datarequest",
    action: "delete",
    possession: "any",
  })
  async deleteDatarequest(
    @graphql.Args() args: DeleteDatarequestArgs
  ): Promise<Datarequest | null> {
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
  async askid(@graphql.Parent() parent: Datarequest): Promise<User | null> {
    const result = await this.service.getAskid(parent.id);

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
  async receiveid(@graphql.Parent() parent: Datarequest): Promise<User | null> {
    const result = await this.service.getReceiveid(parent.id);

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
  async reqcategoryid(
    @graphql.Parent() parent: Datarequest
  ): Promise<Category | null> {
    const result = await this.service.getReqcategoryid(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
