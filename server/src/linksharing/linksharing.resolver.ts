import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { LinksharingResolverBase } from "./base/linksharing.resolver.base";
import { Linksharing } from "./base/Linksharing";
import { LinksharingService } from "./linksharing.service";

@graphql.Resolver(() => Linksharing)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class LinksharingResolver extends LinksharingResolverBase {
  constructor(
    protected readonly service: LinksharingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
