import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  BooleanInput,
  TextInput,
} from "react-admin";

import { CategoryTitle } from "../category/CategoryTitle";
import { ProfileTitle } from "../profile/ProfileTitle";

export const LinkprofileEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
