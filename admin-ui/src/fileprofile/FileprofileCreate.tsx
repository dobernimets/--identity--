import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  BooleanInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { ProfileTitle } from "../profile/ProfileTitle";

export const FileprofileCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="categoryid"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="file" source="file" />
        <BooleanInput label="ispublic" source="ispublic" />
        <ReferenceInput
          source="profile.id"
          reference="Profile"
          label="profileid"
        >
          <SelectInput optionText={ProfileTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
      </SimpleForm>
    </Create>
  );
};
