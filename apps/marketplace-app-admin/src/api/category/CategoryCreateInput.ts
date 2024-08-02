import { WigCreateNestedManyWithoutCategoriesInput } from "./WigCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  description?: string | null;
  name?: string | null;
  wigs?: WigCreateNestedManyWithoutCategoriesInput;
};
