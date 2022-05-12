import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { DatasuggestionResolverBase } from "./base/datasuggestion.resolver.base";
import { Datasuggestion } from "./base/Datasuggestion";
import { DatasuggestionService } from "./datasuggestion.service";

@graphql.Resolver(() => Datasuggestion)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class DatasuggestionResolver extends DatasuggestionResolverBase {
  constructor(
    protected readonly service: DatasuggestionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
