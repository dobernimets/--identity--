import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { LinkprofileResolverBase } from "./base/linkprofile.resolver.base";
import { Linkprofile } from "./base/Linkprofile";
import { LinkprofileService } from "./linkprofile.service";

@graphql.Resolver(() => Linkprofile)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class LinkprofileResolver extends LinkprofileResolverBase {
  constructor(
    protected readonly service: LinkprofileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
