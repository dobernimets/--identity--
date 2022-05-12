import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { DatasuggestionServiceBase } from "./base/datasuggestion.service.base";

@Injectable()
export class DatasuggestionService extends DatasuggestionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
