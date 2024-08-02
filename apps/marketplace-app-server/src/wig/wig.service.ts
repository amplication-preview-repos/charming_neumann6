import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { WigServiceBase } from "./base/wig.service.base";

@Injectable()
export class WigService extends WigServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
