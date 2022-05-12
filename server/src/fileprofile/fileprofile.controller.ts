import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FileprofileService } from "./fileprofile.service";
import { FileprofileControllerBase } from "./base/fileprofile.controller.base";

@swagger.ApiTags("fileprofiles")
@common.Controller("fileprofiles")
export class FileprofileController extends FileprofileControllerBase {
  constructor(
    protected readonly service: FileprofileService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
