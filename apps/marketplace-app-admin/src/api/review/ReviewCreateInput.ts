import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WigWhereUniqueInput } from "../wig/WigWhereUniqueInput";

export type ReviewCreateInput = {
  comment?: string | null;
  rating?: number | null;
  user?: UserWhereUniqueInput | null;
  wig?: WigWhereUniqueInput | null;
};
