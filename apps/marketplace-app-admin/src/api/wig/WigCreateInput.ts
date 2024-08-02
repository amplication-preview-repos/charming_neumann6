import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ReviewCreateNestedManyWithoutWigsInput } from "./ReviewCreateNestedManyWithoutWigsInput";

export type WigCreateInput = {
  category?: CategoryWhereUniqueInput | null;
  color?: string | null;
  description?: string | null;
  images?: Array<"Option1">;
  isAvailable?: boolean | null;
  length?: string | null;
  material?: string | null;
  postedBy?: string | null;
  price?: number | null;
  reviews?: ReviewCreateNestedManyWithoutWigsInput;
  style?: string | null;
  title?: string | null;
};
