import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { MyidentityResolverBase } from "./base/myidentity.resolver.base";
import { Myidentity } from "./base/Myidentity";
import { MyidentityService } from "./myidentity.service";

@graphql.Resolver(() => Myidentity)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class MyidentityResolver extends MyidentityResolverBase {
  constructor(
    protected readonly service: MyidentityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
