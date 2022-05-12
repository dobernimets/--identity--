import { Module } from "@nestjs/common";
import { ProfileviewModuleBase } from "./base/profileview.module.base";
import { ProfileviewService } from "./profileview.service";
import { ProfileviewController } from "./profileview.controller";
import { ProfileviewResolver } from "./profileview.resolver";

@Module({
  imports: [ProfileviewModuleBase],
  controllers: [ProfileviewController],
  providers: [ProfileviewService, ProfileviewResolver],
  exports: [ProfileviewService],
})
export class ProfileviewModule {}
