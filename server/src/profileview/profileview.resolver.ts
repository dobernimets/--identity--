import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ProfileviewResolverBase } from "./base/profileview.resolver.base";
import { Profileview } from "./base/Profileview";
import { ProfileviewService } from "./profileview.service";

@graphql.Resolver(() => Profileview)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ProfileviewResolver extends ProfileviewResolverBase {
  constructor(
    protected readonly service: ProfileviewService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
