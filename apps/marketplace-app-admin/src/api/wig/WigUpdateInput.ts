import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { ReviewUpdateManyWithoutWigsInput } from "./ReviewUpdateManyWithoutWigsInput";

export type WigUpdateInput = {
  category?: CategoryWhereUniqueInput | null;
  color?: string | null;
  description?: string | null;
  images?: Array<"Option1">;
  isAvailable?: boolean | null;
  length?: string | null;
  material?: string | null;
  postedBy?: string | null;
  price?: number | null;
  reviews?: ReviewUpdateManyWithoutWigsInput;
  style?: string | null;
  title?: string | null;
};
