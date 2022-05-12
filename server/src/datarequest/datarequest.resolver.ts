import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DatarequestResolverBase } from "./base/datarequest.resolver.base";
import { Datarequest } from "./base/Datarequest";
import { DatarequestService } from "./datarequest.service";

@graphql.Resolver(() => Datarequest)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DatarequestResolver extends DatarequestResolverBase {
  constructor(
    protected readonly service: DatarequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
