/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";

import {
  Prisma,
  Category,
  Datarequest,
  Datasuggestion,
  Fileprofile,
  Linkcategory,
  Linkprofile,
  Profileview,
  Templatecategory,
} from "@prisma/client";

export class CategoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CategoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryFindManyArgs>
  ): Promise<number> {
    return this.prisma.category.count(args);
  }

  async findMany<T extends Prisma.CategoryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryFindManyArgs>
  ): Promise<Category[]> {
    return this.prisma.category.findMany(args);
  }
  async findOne<T extends Prisma.CategoryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryFindUniqueArgs>
  ): Promise<Category | null> {
    return this.prisma.category.findUnique(args);
  }
  async create<T extends Prisma.CategoryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryCreateArgs>
  ): Promise<Category> {
    return this.prisma.category.create<T>(args);
  }
  async update<T extends Prisma.CategoryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryUpdateArgs>
  ): Promise<Category> {
    return this.prisma.category.update<T>(args);
  }
  async delete<T extends Prisma.CategoryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CategoryDeleteArgs>
  ): Promise<Category> {
    return this.prisma.category.delete(args);
  }

  async findDatarequests(
    parentId: string,
    args: Prisma.DatarequestFindManyArgs
  ): Promise<Datarequest[]> {
    return this.prisma.category
      .findUnique({
        where: { id: parentId },
      })
      .datarequests(args);
  }

  async findDatasuggestions(
    parentId: string,
    args: Prisma.DatasuggestionFindManyArgs
  ): Promise<Datasuggestion[]> {
    return this.prisma.category
      .findUnique({
        where: { id: parentId },
      })
      .datasuggestions(args);
  }

  async findFileprofiles(
    parentId: string,
    args: Prisma.FileprofileFindManyArgs
  ): Promise<Fileprofile[]> {
    return this.prisma.category
      .findUnique({
        where: { id: parentId },
      })
      .fileprofiles(args);
  }

  async findLinkcategories(
    parentId: string,
    args: Prisma.LinkcategoryFindManyArgs
  ): Promise<Linkcategory[]> {
    return this.prisma.category
      .findUnique({
        where: { id: parentId },
      })
      .linkcategories(args);
  }

  async findLinkprofiles(
    parentId: string,
    args: Prisma.LinkprofileFindManyArgs
  ): Promise<Linkprofile[]> {
    return this.prisma.category
      .findUnique({
        where: { id: parentId },
      })
      .linkprofiles(args);
  }

  async findProfileviews(
    parentId: string,
    args: Prisma.ProfileviewFindManyArgs
  ): Promise<Profileview[]> {
    return this.prisma.category
      .findUnique({
        where: { id: parentId },
      })
      .profileviews(args);
  }

  async findTemplatecategories(
    parentId: string,
    args: Prisma.TemplatecategoryFindManyArgs
  ): Promise<Templatecategory[]> {
    return this.prisma.category
      .findUnique({
        where: { id: parentId },
      })
      .templatecategories(args);
  }
}
