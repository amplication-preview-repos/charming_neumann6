import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";
import { WigWhereUniqueInput } from "../wig/WigWhereUniqueInput";

export type ReviewWhereInput = {
  comment?: StringNullableFilter;
  id?: StringFilter;
  rating?: IntNullableFilter;
  user?: UserWhereUniqueInput;
  wig?: WigWhereUniqueInput;
};
