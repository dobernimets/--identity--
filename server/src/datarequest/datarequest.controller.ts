import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DatarequestService } from "./datarequest.service";
import { DatarequestControllerBase } from "./base/datarequest.controller.base";

@swagger.ApiTags("datarequests")
@common.Controller("datarequests")
export class DatarequestController extends DatarequestControllerBase {
  constructor(
    protected readonly service: DatarequestService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
