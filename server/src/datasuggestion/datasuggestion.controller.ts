import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DatasuggestionService } from "./datasuggestion.service";
import { DatasuggestionControllerBase } from "./base/datasuggestion.controller.base";

@swagger.ApiTags("datasuggestions")
@common.Controller("datasuggestions")
export class DatasuggestionController extends DatasuggestionControllerBase {
  constructor(
    protected readonly service: DatasuggestionService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
