/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Datarequest, User, Category } from "@prisma/client";

export class DatarequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.DatarequestFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatarequestFindManyArgs>
  ): Promise<number> {
    return this.prisma.datarequest.count(args);
  }

  async findMany<T extends Prisma.DatarequestFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatarequestFindManyArgs>
  ): Promise<Datarequest[]> {
    return this.prisma.datarequest.findMany(args);
  }
  async findOne<T extends Prisma.DatarequestFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatarequestFindUniqueArgs>
  ): Promise<Datarequest | null> {
    return this.prisma.datarequest.findUnique(args);
  }
  async create<T extends Prisma.DatarequestCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatarequestCreateArgs>
  ): Promise<Datarequest> {
    return this.prisma.datarequest.create<T>(args);
  }
  async update<T extends Prisma.DatarequestUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatarequestUpdateArgs>
  ): Promise<Datarequest> {
    return this.prisma.datarequest.update<T>(args);
  }
  async delete<T extends Prisma.DatarequestDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.DatarequestDeleteArgs>
  ): Promise<Datarequest> {
    return this.prisma.datarequest.delete(args);
  }

  async getAskid(parentId: string): Promise<User | null> {
    return this.prisma.datarequest
      .findUnique({
        where: { id: parentId },
      })
      .askid();
  }

  async getReceiveid(parentId: string): Promise<User | null> {
    return this.prisma.datarequest
      .findUnique({
        where: { id: parentId },
      })
      .receiveid();
  }

  async getReqcategoryid(parentId: string): Promise<Category | null> {
    return this.prisma.datarequest
      .findUnique({
        where: { id: parentId },
      })
      .reqcategoryid();
  }
}