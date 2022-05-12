import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MembergroupResolverBase } from "./base/membergroup.resolver.base";
import { Membergroup } from "./base/Membergroup";
import { MembergroupService } from "./membergroup.service";

@graphql.Resolver(() => Membergroup)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MembergroupResolver extends MembergroupResolverBase {
  constructor(
    protected readonly service: MembergroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
