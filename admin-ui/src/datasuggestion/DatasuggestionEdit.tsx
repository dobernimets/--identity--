import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  BooleanInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { CategoryTitle } from "../category/CategoryTitle";

export const DatasuggestionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <BooleanInput label="isactivesuggestion" source="isactivesuggestion" />
        <ReferenceInput source="user.id" reference="User" label="receiveid">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "offer", value: "offer" },
            { label: "rejection", value: "rejection" },
            { label: "agreement", value: "agreement" },
            { label: "cancelation", value: "cancelation" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="suggestioncategoryid"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="suggestionid">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
