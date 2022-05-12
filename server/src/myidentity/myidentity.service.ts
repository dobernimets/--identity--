import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MyidentityServiceBase } from "./base/myidentity.service.base";

@Injectable()
export class MyidentityService extends MyidentityServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
