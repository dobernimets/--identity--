import { Module } from "@nestjs/common";
import { FileprofileModuleBase } from "./base/fileprofile.module.base";
import { FileprofileService } from "./fileprofile.service";
import { FileprofileController } from "./fileprofile.controller";
import { FileprofileResolver } from "./fileprofile.resolver";

@Module({
  imports: [FileprofileModuleBase],
  controllers: [FileprofileController],
  providers: [FileprofileService, FileprofileResolver],
  exports: [FileprofileService],
})
export class FileprofileModule {}
