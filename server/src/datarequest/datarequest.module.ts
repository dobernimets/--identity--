import { Module } from "@nestjs/common";
import { DatarequestModuleBase } from "./base/datarequest.module.base";
import { DatarequestService } from "./datarequest.service";
import { DatarequestController } from "./datarequest.controller";
import { DatarequestResolver } from "./datarequest.resolver";

@Module({
  imports: [DatarequestModuleBase],
  controllers: [DatarequestController],
  providers: [DatarequestService, DatarequestResolver],
  exports: [DatarequestService],
})
export class DatarequestModule {}
