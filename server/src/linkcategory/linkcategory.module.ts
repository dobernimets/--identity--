import { Module } from "@nestjs/common";
import { LinkcategoryModuleBase } from "./base/linkcategory.module.base";
import { LinkcategoryService } from "./linkcategory.service";
import { LinkcategoryController } from "./linkcategory.controller";
import { LinkcategoryResolver } from "./linkcategory.resolver";

@Module({
  imports: [LinkcategoryModuleBase],
  controllers: [LinkcategoryController],
  providers: [LinkcategoryService, LinkcategoryResolver],
  exports: [LinkcategoryService],
})
export class LinkcategoryModule {}
