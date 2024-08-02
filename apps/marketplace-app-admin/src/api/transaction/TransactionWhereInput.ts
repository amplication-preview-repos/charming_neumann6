import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  paymentMethod?: "Option1";
  status?: "Option1";
};
