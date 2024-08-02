import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  SelectArrayInput,
  BooleanInput,
  NumberInput,
  ReferenceArrayInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { ReviewTitle } from "../review/ReviewTitle";

export const WigEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="color" source="color" />
        <TextInput label="description" multiline source="description" />
        <SelectArrayInput
          label="images"
          source="images"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          optionValue="value"
        />
        <BooleanInput label="isAvailable" source="isAvailable" />
        <TextInput label="length" source="length" />
        <TextInput label="material" source="material" />
        <TextInput label="postedBy" source="postedBy" />
        <NumberInput label="price" source="price" />
        <ReferenceArrayInput
          source="reviews"
          reference="Review"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ReviewTitle} />
        </ReferenceArrayInput>
        <TextInput label="style" source="style" />
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Edit>
  );
};
