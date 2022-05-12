import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LinksharingService } from "./linksharing.service";
import { LinksharingControllerBase } from "./base/linksharing.controller.base";

@swagger.ApiTags("linksharings")
@common.Controller("linksharings")
export class LinksharingController extends LinksharingControllerBase {
  constructor(
    protected readonly service: LinksharingService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
