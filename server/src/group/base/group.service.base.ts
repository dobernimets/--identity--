/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Group, Membergroup, User, Template } from "@prisma/client";

export class GroupServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.GroupFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupFindManyArgs>
  ): Promise<number> {
    return this.prisma.group.count(args);
  }

  async findMany<T extends Prisma.GroupFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupFindManyArgs>
  ): Promise<Group[]> {
    return this.prisma.group.findMany(args);
  }
  async findOne<T extends Prisma.GroupFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupFindUniqueArgs>
  ): Promise<Group | null> {
    return this.prisma.group.findUnique(args);
  }
  async create<T extends Prisma.GroupCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupCreateArgs>
  ): Promise<Group> {
    return this.prisma.group.create<T>(args);
  }
  async update<T extends Prisma.GroupUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupUpdateArgs>
  ): Promise<Group> {
    return this.prisma.group.update<T>(args);
  }
  async delete<T extends Prisma.GroupDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.GroupDeleteArgs>
  ): Promise<Group> {
    return this.prisma.group.delete(args);
  }

  async findMembergroups(
    parentId: string,
    args: Prisma.MembergroupFindManyArgs
  ): Promise<Membergroup[]> {
    return this.prisma.group
      .findUnique({
        where: { id: parentId },
      })
      .membergroups(args);
  }

  async getOwnerid(parentId: string): Promise<User | null> {
    return this.prisma.group
      .findUnique({
        where: { id: parentId },
      })
      .ownerid();
  }

  async getTemplateid(parentId: string): Promise<Template | null> {
    return this.prisma.group
      .findUnique({
        where: { id: parentId },
      })
      .templateid();
  }
}