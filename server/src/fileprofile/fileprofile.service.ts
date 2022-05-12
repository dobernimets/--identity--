import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { FileprofileServiceBase } from "./base/fileprofile.service.base";

@Injectable()
export class FileprofileService extends FileprofileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
