import { Module } from "@nestjs/common";
import { DatasuggestionModuleBase } from "./base/datasuggestion.module.base";
import { DatasuggestionService } from "./datasuggestion.service";
import { DatasuggestionController } from "./datasuggestion.controller";
import { DatasuggestionResolver } from "./datasuggestion.resolver";

@Module({
  imports: [DatasuggestionModuleBase],
  controllers: [DatasuggestionController],
  providers: [DatasuggestionService, DatasuggestionResolver],
  exports: [DatasuggestionService],
})
export class DatasuggestionModule {}
