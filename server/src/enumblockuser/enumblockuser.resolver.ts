import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { EnumblockuserResolverBase } from "./base/enumblockuser.resolver.base";
import { Enumblockuser } from "./base/Enumblockuser";
import { EnumblockuserService } from "./enumblockuser.service";

@graphql.Resolver(() => Enumblockuser)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class EnumblockuserResolver extends EnumblockuserResolverBase {
  constructor(
    protected readonly service: EnumblockuserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
