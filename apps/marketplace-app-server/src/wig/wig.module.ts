import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { WigModuleBase } from "./base/wig.module.base";
import { WigService } from "./wig.service";
import { WigController } from "./wig.controller";
import { WigResolver } from "./wig.resolver";

@Module({
  imports: [WigModuleBase, forwardRef(() => AuthModule)],
  controllers: [WigController],
  providers: [WigService, WigResolver],
  exports: [WigService],
})
export class WigModule {}
