import { Module } from "@nestjs/common";
import { LinkprofileModuleBase } from "./base/linkprofile.module.base";
import { LinkprofileService } from "./linkprofile.service";
import { LinkprofileController } from "./linkprofile.controller";
import { LinkprofileResolver } from "./linkprofile.resolver";

@Module({
  imports: [LinkprofileModuleBase],
  controllers: [LinkprofileController],
  providers: [LinkprofileService, LinkprofileResolver],
  exports: [LinkprofileService],
})
export class LinkprofileModule {}
