import { Review } from "../review/Review";
import { JsonValue } from "type-fest";

export type User = {
  contactInfo: string | null;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  reviews?: Array<Review>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
