import { Category } from "../category/Category";
import { Review } from "../review/Review";

export type Wig = {
  category?: Category | null;
  color: string | null;
  createdAt: Date;
  description: string | null;
  id: string;
  images?: Array<"Option1">;
  isAvailable: boolean | null;
  length: string | null;
  material: string | null;
  postedBy: string | null;
  price: number | null;
  reviews?: Array<Review>;
  style: string | null;
  title: string | null;
  updatedAt: Date;
};
