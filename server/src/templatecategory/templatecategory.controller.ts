import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { TemplatecategoryService } from "./templatecategory.service";
import { TemplatecategoryControllerBase } from "./base/templatecategory.controller.base";

@swagger.ApiTags("templatecategories")
@common.Controller("templatecategories")
export class TemplatecategoryController extends TemplatecategoryControllerBase {
  constructor(
    protected readonly service: TemplatecategoryService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
