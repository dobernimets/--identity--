import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { LinkcategoryResolverBase } from "./base/linkcategory.resolver.base";
import { Linkcategory } from "./base/Linkcategory";
import { LinkcategoryService } from "./linkcategory.service";

@graphql.Resolver(() => Linkcategory)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class LinkcategoryResolver extends LinkcategoryResolverBase {
  constructor(
    protected readonly service: LinkcategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
