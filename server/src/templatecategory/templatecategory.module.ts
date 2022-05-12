import { Module } from "@nestjs/common";
import { TemplatecategoryModuleBase } from "./base/templatecategory.module.base";
import { TemplatecategoryService } from "./templatecategory.service";
import { TemplatecategoryController } from "./templatecategory.controller";
import { TemplatecategoryResolver } from "./templatecategory.resolver";

@Module({
  imports: [TemplatecategoryModuleBase],
  controllers: [TemplatecategoryController],
  providers: [TemplatecategoryService, TemplatecategoryResolver],
  exports: [TemplatecategoryService],
})
export class TemplatecategoryModule {}
