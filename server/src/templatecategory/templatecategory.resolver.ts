import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { TemplatecategoryResolverBase } from "./base/templatecategory.resolver.base";
import { Templatecategory } from "./base/Templatecategory";
import { TemplatecategoryService } from "./templatecategory.service";

@graphql.Resolver(() => Templatecategory)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class TemplatecategoryResolver extends TemplatecategoryResolverBase {
  constructor(
    protected readonly service: TemplatecategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
