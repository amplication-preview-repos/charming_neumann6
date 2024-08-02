import { WigWhereInput } from "./WigWhereInput";
import { WigOrderByInput } from "./WigOrderByInput";

export type WigFindManyArgs = {
  where?: WigWhereInput;
  orderBy?: Array<WigOrderByInput>;
  skip?: number;
  take?: number;
};
