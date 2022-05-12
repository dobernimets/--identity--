import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { MembergroupServiceBase } from "./base/membergroup.service.base";

@Injectable()
export class MembergroupService extends MembergroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
