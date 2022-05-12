import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
} from "react-admin";
import { UserTitle } from "../user/UserTitle";
import { CategoryTitle } from "../category/CategoryTitle";

export const DatarequestEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="user.id" reference="User" label="askid">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <BooleanInput label="isactivereq" source="isactivereq" />
        <ReferenceInput source="user.id" reference="User" label="receiveid">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="reqcategoryid"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[
            { label: "request", value: "request" },
            { label: "rejection", value: "rejection" },
            { label: "agreement", value: "agreement" },
            { label: "cancelation", value: "cancelation" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
      </SimpleForm>
    </Edit>
  );
};
