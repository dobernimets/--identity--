import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { EnumblockuserServiceBase } from "./base/enumblockuser.service.base";

@Injectable()
export class EnumblockuserService extends EnumblockuserServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
