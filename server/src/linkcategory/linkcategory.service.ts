import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { LinkcategoryServiceBase } from "./base/linkcategory.service.base";

@Injectable()
export class LinkcategoryService extends LinkcategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
