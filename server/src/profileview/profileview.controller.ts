import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProfileviewService } from "./profileview.service";
import { ProfileviewControllerBase } from "./base/profileview.controller.base";

@swagger.ApiTags("profileviews")
@common.Controller("profileviews")
export class ProfileviewController extends ProfileviewControllerBase {
  constructor(
    protected readonly service: ProfileviewService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
