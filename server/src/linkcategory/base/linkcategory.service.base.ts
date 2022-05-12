/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Linkcategory, Category, Linksharing } from "@prisma/client";

export class LinkcategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.LinkcategoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LinkcategoryFindManyArgs>
  ): Promise<number> {
    return this.prisma.linkcategory.count(args);
  }

  async findMany<T extends Prisma.LinkcategoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.LinkcategoryFindManyArgs>
  ): Promise<Linkcategory[]> {
    return this.prisma.linkcategory.findMany(args);
  }
  async findOne<T extends Prisma.LinkcategoryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.LinkcategoryFindUniqueArgs>
  ): Promise<Linkcategory | null> {
    return this.prisma.linkcategory.findUnique(args);
  }
  async create<T extends Prisma.LinkcategoryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LinkcategoryCreateArgs>
  ): Promise<Linkcategory> {
    return this.prisma.linkcategory.create<T>(args);
  }
  async update<T extends Prisma.LinkcategoryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.LinkcategoryUpdateArgs>
  ): Promise<Linkcategory> {
    return this.prisma.linkcategory.update<T>(args);
  }
  async delete<T extends Prisma.LinkcategoryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.LinkcategoryDeleteArgs>
  ): Promise<Linkcategory> {
    return this.prisma.linkcategory.delete(args);
  }

  async getCategoryid(parentId: string): Promise<Category | null> {
    return this.prisma.linkcategory
      .findUnique({
        where: { id: parentId },
      })
      .categoryid();
  }

  async getLinkid(parentId: string): Promise<Linksharing | null> {
    return this.prisma.linkcategory
      .findUnique({
        where: { id: parentId },
      })
      .linkid();
  }
}