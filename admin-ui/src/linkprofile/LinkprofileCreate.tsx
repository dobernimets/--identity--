import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { ProfileTitle } from "../profile/ProfileTitle";

export const LinkprofileCreate = (props: CreateProps): React.ReactElement => {
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
        <BooleanInput label="ispublic" source="ispublic" />
        <ReferenceInput
          source="profile.id"
          reference="Profile"
          label="profileid"
        >
          <SelectInput optionText={ProfileTitle} />
        </ReferenceInput>
        <TextInput label="title" source="title" />
        <TextInput label="url" source="url" />
      </SimpleForm>
    </Create>
  );
};
