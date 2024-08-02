import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { WigService } from "./wig.service";
import { WigControllerBase } from "./base/wig.controller.base";

@swagger.ApiTags("wigs")
@common.Controller("wigs")
export class WigController extends WigControllerBase {
  constructor(
    protected readonly service: WigService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
