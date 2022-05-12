import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { LinksharingServiceBase } from "./base/linksharing.service.base";

@Injectable()
export class LinksharingService extends LinksharingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
