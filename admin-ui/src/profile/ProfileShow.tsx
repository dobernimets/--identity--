import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { PROFILE_TITLE_FIELD } from "./ProfileTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const ProfileShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="content" source="content" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <ReferenceField label="identityid" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Fileprofile"
          target="ProfileId"
          label="fileprofiles"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="categoryid"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="file" source="file" />
            <TextField label="ID" source="id" />
            <BooleanField label="ispublic" source="ispublic" />
            <ReferenceField
              label="profileid"
              source="profile.id"
              reference="Profile"
            >
              <TextField source={PROFILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Linkprofile"
          target="ProfileId"
          label="linkprofiles"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="categoryid"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="ispublic" source="ispublic" />
            <ReferenceField
              label="profileid"
              source="profile.id"
              reference="Profile"
            >
              <TextField source={PROFILE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="url" source="url" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
