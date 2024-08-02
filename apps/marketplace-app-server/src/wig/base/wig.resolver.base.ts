/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { Wig } from "./Wig";
import { WigCountArgs } from "./WigCountArgs";
import { WigFindManyArgs } from "./WigFindManyArgs";
import { WigFindUniqueArgs } from "./WigFindUniqueArgs";
import { CreateWigArgs } from "./CreateWigArgs";
import { UpdateWigArgs } from "./UpdateWigArgs";
import { DeleteWigArgs } from "./DeleteWigArgs";
import { ReviewFindManyArgs } from "../../review/base/ReviewFindManyArgs";
import { Review } from "../../review/base/Review";
import { Category } from "../../category/base/Category";
import { WigService } from "../wig.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Wig)
export class WigResolverBase {
  constructor(
    protected readonly service: WigService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Wig",
    action: "read",
    possession: "any",
  })
  async _wigsMeta(
    @graphql.Args() args: WigCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Wig])
  @nestAccessControl.UseRoles({
    resource: "Wig",
    action: "read",
    possession: "any",
  })
  async wigs(@graphql.Args() args: WigFindManyArgs): Promise<Wig[]> {
    return this.service.wigs(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Wig, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Wig",
    action: "read",
    possession: "own",
  })
  async wig(@graphql.Args() args: WigFindUniqueArgs): Promise<Wig | null> {
    const result = await this.service.wig(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Wig)
  @nestAccessControl.UseRoles({
    resource: "Wig",
    action: "create",
    possession: "any",
  })
  async createWig(@graphql.Args() args: CreateWigArgs): Promise<Wig> {
    return await this.service.createWig({
      ...args,
      data: {
        ...args.data,

        category: args.data.category
          ? {
              connect: args.data.category,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Wig)
  @nestAccessControl.UseRoles({
    resource: "Wig",
    action: "update",
    possession: "any",
  })
  async updateWig(@graphql.Args() args: UpdateWigArgs): Promise<Wig | null> {
    try {
      return await this.service.updateWig({
        ...args,
        data: {
          ...args.data,

          category: args.data.category
            ? {
                connect: args.data.category,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Wig)
  @nestAccessControl.UseRoles({
    resource: "Wig",
    action: "delete",
    possession: "any",
  })
  async deleteWig(@graphql.Args() args: DeleteWigArgs): Promise<Wig | null> {
    try {
      return await this.service.deleteWig(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Review], { name: "reviews" })
  @nestAccessControl.UseRoles({
    resource: "Review",
    action: "read",
    possession: "any",
  })
  async findReviews(
    @graphql.Parent() parent: Wig,
    @graphql.Args() args: ReviewFindManyArgs
  ): Promise<Review[]> {
    const results = await this.service.findReviews(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Category, {
    nullable: true,
    name: "category",
  })
  @nestAccessControl.UseRoles({
    resource: "Category",
    action: "read",
    possession: "any",
  })
  async getCategory(@graphql.Parent() parent: Wig): Promise<Category | null> {
    const result = await this.service.getCategory(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
