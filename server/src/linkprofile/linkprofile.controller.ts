import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LinkprofileService } from "./linkprofile.service";
import { LinkprofileControllerBase } from "./base/linkprofile.controller.base";

@swagger.ApiTags("linkprofiles")
@common.Controller("linkprofiles")
export class LinkprofileController extends LinkprofileControllerBase {
  constructor(
    protected readonly service: LinkprofileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
