import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { LinkcategoryService } from "./linkcategory.service";
import { LinkcategoryControllerBase } from "./base/linkcategory.controller.base";

@swagger.ApiTags("linkcategories")
@common.Controller("linkcategories")
export class LinkcategoryController extends LinkcategoryControllerBase {
  constructor(
    protected readonly service: LinkcategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
