import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EnumblockuserService } from "./enumblockuser.service";
import { EnumblockuserControllerBase } from "./base/enumblockuser.controller.base";

@swagger.ApiTags("enumblockusers")
@common.Controller("enumblockusers")
export class EnumblockuserController extends EnumblockuserControllerBase {
  constructor(
    protected readonly service: EnumblockuserService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
