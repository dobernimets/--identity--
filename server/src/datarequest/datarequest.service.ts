import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DatarequestServiceBase } from "./base/datarequest.service.base";

@Injectable()
export class DatarequestService extends DatarequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
