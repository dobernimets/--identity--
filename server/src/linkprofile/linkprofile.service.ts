import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { LinkprofileServiceBase } from "./base/linkprofile.service.base";

@Injectable()
export class LinkprofileService extends LinkprofileServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
