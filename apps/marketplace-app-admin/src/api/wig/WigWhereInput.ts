import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { ReviewListRelationFilter } from "../review/ReviewListRelationFilter";

export type WigWhereInput = {
  category?: CategoryWhereUniqueInput;
  color?: StringNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  isAvailable?: BooleanNullableFilter;
  length?: StringNullableFilter;
  material?: StringNullableFilter;
  postedBy?: StringNullableFilter;
  price?: FloatNullableFilter;
  reviews?: ReviewListRelationFilter;
  style?: StringNullableFilter;
  title?: StringNullableFilter;
};
