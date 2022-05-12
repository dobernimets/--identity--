import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { FileprofileResolverBase } from "./base/fileprofile.resolver.base";
import { Fileprofile } from "./base/Fileprofile";
import { FileprofileService } from "./fileprofile.service";

@graphql.Resolver(() => Fileprofile)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class FileprofileResolver extends FileprofileResolverBase {
  constructor(
    protected readonly service: FileprofileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
