import { Module } from "@nestjs/common";
import { MembergroupModuleBase } from "./base/membergroup.module.base";
import { MembergroupService } from "./membergroup.service";
import { MembergroupController } from "./membergroup.controller";
import { MembergroupResolver } from "./membergroup.resolver";

@Module({
  imports: [MembergroupModuleBase],
  controllers: [MembergroupController],
  providers: [MembergroupService, MembergroupResolver],
  exports: [MembergroupService],
})
export class MembergroupModule {}
