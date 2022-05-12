import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MyidentityService } from "./myidentity.service";
import { MyidentityControllerBase } from "./base/myidentity.controller.base";

@swagger.ApiTags("myidentities")
@common.Controller("myidentities")
export class MyidentityController extends MyidentityControllerBase {
  constructor(
    protected readonly service: MyidentityService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
