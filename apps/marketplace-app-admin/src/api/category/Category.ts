import { Wig } from "../wig/Wig";

export type Category = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  wigs?: Array<Wig>;
};
