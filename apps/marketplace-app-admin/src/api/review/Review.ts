import { User } from "../user/User";
import { Wig } from "../wig/Wig";

export type Review = {
  comment: string | null;
  createdAt: Date;
  id: string;
  rating: number | null;
  updatedAt: Date;
  user?: User | null;
  wig?: Wig | null;
};
