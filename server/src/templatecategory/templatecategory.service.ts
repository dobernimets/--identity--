import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { TemplatecategoryServiceBase } from "./base/templatecategory.service.base";

@Injectable()
export class TemplatecategoryService extends TemplatecategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
