/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { DatarequestService } from "../datarequest.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { DatarequestCreateInput } from "./DatarequestCreateInput";
import { DatarequestWhereInput } from "./DatarequestWhereInput";
import { DatarequestWhereUniqueInput } from "./DatarequestWhereUniqueInput";
import { DatarequestFindManyArgs } from "./DatarequestFindManyArgs";
import { DatarequestUpdateInput } from "./DatarequestUpdateInput";
import { Datarequest } from "./Datarequest";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class DatarequestControllerBase {
  constructor(
    protected readonly service: DatarequestService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Datarequest",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Datarequest })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: DatarequestCreateInput
  ): Promise<Datarequest> {
    return await this.service.create({
      data: {
        ...data,

        askid: data.askid
          ? {
              connect: data.askid,
            }
          : undefined,

        receiveid: data.receiveid
          ? {
              connect: data.receiveid,
            }
          : undefined,

        reqcategoryid: data.reqcategoryid
          ? {
              connect: data.reqcategoryid,
            }
          : undefined,
      },
      select: {
        askid: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isactivereq: true,

        receiveid: {
          select: {
            id: true,
          },
        },

        reqcategoryid: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Datarequest",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Datarequest] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(DatarequestFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Datarequest[]> {
    const args = plainToClass(DatarequestFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        askid: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isactivereq: true,

        receiveid: {
          select: {
            id: true,
          },
        },

        reqcategoryid: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Datarequest",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Datarequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: DatarequestWhereUniqueInput
  ): Promise<Datarequest | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        askid: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        isactivereq: true,

        receiveid: {
          select: {
            id: true,
          },
        },

        reqcategoryid: {
          select: {
            id: true,
          },
        },

        status: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Datarequest",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Datarequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: DatarequestWhereUniqueInput,
    @common.Body() data: DatarequestUpdateInput
  ): Promise<Datarequest | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          askid: data.askid
            ? {
                connect: data.askid,
              }
            : undefined,

          receiveid: data.receiveid
            ? {
                connect: data.receiveid,
              }
            : undefined,

          reqcategoryid: data.reqcategoryid
            ? {
                connect: data.reqcategoryid,
              }
            : undefined,
        },
        select: {
          askid: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          isactivereq: true,

          receiveid: {
            select: {
              id: true,
            },
          },

          reqcategoryid: {
            select: {
              id: true,
            },
          },

          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "Datarequest",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Datarequest })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: DatarequestWhereUniqueInput
  ): Promise<Datarequest | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          askid: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          isactivereq: true,

          receiveid: {
            select: {
              id: true,
            },
          },

          reqcategoryid: {
            select: {
              id: true,
            },
          },

          status: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}