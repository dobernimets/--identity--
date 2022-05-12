import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  BooleanField,
  ReferenceField,
} from "react-admin";

import { ENUMBLOCKUSER_TITLE_FIELD } from "./EnumblockuserTitle";

export const EnumblockuserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="statusblock" source="statusblock" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="User"
          target="EnumblockuserId"
          label="Users"
        >
          <Datagrid rowClick="show">
            <TextField label="apartment" source="apartment" />
            <TextField label="city" source="city" />
            <TextField label="country" source="country" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField label="housnumber" source="housnumber" />
            <TextField label="ID" source="id" />
            <TextField label="image" source="image" />
            <BooleanField label="isactive" source="isactive" />
            <ReferenceField
              label="isblocked"
              source="enumblockuser.id"
              reference="Enumblockuser"
            >
              <TextField source={ENUMBLOCKUSER_TITLE_FIELD} />
            </ReferenceField>
            <BooleanField label="isregistered" source="isregistered" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="phone" source="phone" />
            <TextField label="Roles" source="roles" />
            <TextField label="street" source="street" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
