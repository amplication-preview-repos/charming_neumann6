import { WigUpdateManyWithoutCategoriesInput } from "./WigUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  description?: string | null;
  name?: string | null;
  wigs?: WigUpdateManyWithoutCategoriesInput;
};
