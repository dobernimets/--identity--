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
import { TemplatecategoryService } from "../templatecategory.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { TemplatecategoryCreateInput } from "./TemplatecategoryCreateInput";
import { TemplatecategoryWhereInput } from "./TemplatecategoryWhereInput";
import { TemplatecategoryWhereUniqueInput } from "./TemplatecategoryWhereUniqueInput";
import { TemplatecategoryFindManyArgs } from "./TemplatecategoryFindManyArgs";
import { TemplatecategoryUpdateInput } from "./TemplatecategoryUpdateInput";
import { Templatecategory } from "./Templatecategory";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class TemplatecategoryControllerBase {
  constructor(
    protected readonly service: TemplatecategoryService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Templatecategory",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Templatecategory })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: TemplatecategoryCreateInput
  ): Promise<Templatecategory> {
    return await this.service.create({
      data: {
        ...data,

        caregoryid: data.caregoryid
          ? {
              connect: data.caregoryid,
            }
          : undefined,

        templateid: data.templateid
          ? {
              connect: data.templateid,
            }
          : undefined,
      },
      select: {
        caregoryid: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        templateid: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Templatecategory",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [Templatecategory] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(TemplatecategoryFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<Templatecategory[]> {
    const args = plainToClass(TemplatecategoryFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        caregoryid: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        templateid: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "Templatecategory",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Templatecategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: TemplatecategoryWhereUniqueInput
  ): Promise<Templatecategory | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        caregoryid: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,

        templateid: {
          select: {
            id: true,
          },
        },

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
    resource: "Templatecategory",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Templatecategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: TemplatecategoryWhereUniqueInput,
    @common.Body() data: TemplatecategoryUpdateInput
  ): Promise<Templatecategory | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          caregoryid: data.caregoryid
            ? {
                connect: data.caregoryid,
              }
            : undefined,

          templateid: data.templateid
            ? {
                connect: data.templateid,
              }
            : undefined,
        },
        select: {
          caregoryid: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          templateid: {
            select: {
              id: true,
            },
          },

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
    resource: "Templatecategory",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Templatecategory })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: TemplatecategoryWhereUniqueInput
  ): Promise<Templatecategory | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          caregoryid: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,

          templateid: {
            select: {
              id: true,
            },
          },

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
