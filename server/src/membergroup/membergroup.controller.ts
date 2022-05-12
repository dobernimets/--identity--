import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MembergroupService } from "./membergroup.service";
import { MembergroupControllerBase } from "./base/membergroup.controller.base";

@swagger.ApiTags("membergroups")
@common.Controller("membergroups")
export class MembergroupController extends MembergroupControllerBase {
  constructor(
    protected readonly service: MembergroupService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
