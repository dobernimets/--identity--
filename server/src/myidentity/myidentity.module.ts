import { Module } from "@nestjs/common";
import { MyidentityModuleBase } from "./base/myidentity.module.base";
import { MyidentityService } from "./myidentity.service";
import { MyidentityController } from "./myidentity.controller";
import { MyidentityResolver } from "./myidentity.resolver";

@Module({
  imports: [MyidentityModuleBase],
  controllers: [MyidentityController],
  providers: [MyidentityService, MyidentityResolver],
  exports: [MyidentityService],
})
export class MyidentityModule {}
