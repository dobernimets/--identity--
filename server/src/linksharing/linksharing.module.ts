import { Module } from "@nestjs/common";
import { LinksharingModuleBase } from "./base/linksharing.module.base";
import { LinksharingService } from "./linksharing.service";
import { LinksharingController } from "./linksharing.controller";
import { LinksharingResolver } from "./linksharing.resolver";

@Module({
  imports: [LinksharingModuleBase],
  controllers: [LinksharingController],
  providers: [LinksharingService, LinksharingResolver],
  exports: [LinksharingService],
})
export class LinksharingModule {}
