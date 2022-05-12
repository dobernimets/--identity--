import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ProfileviewServiceBase } from "./base/profileview.service.base";

@Injectable()
export class ProfileviewService extends ProfileviewServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
