import { Module } from "@nestjs/common";
import { EnumblockuserModuleBase } from "./base/enumblockuser.module.base";
import { EnumblockuserService } from "./enumblockuser.service";
import { EnumblockuserController } from "./enumblockuser.controller";
import { EnumblockuserResolver } from "./enumblockuser.resolver";

@Module({
  imports: [EnumblockuserModuleBase],
  controllers: [EnumblockuserController],
  providers: [EnumblockuserService, EnumblockuserResolver],
  exports: [EnumblockuserService],
})
export class EnumblockuserModule {}
