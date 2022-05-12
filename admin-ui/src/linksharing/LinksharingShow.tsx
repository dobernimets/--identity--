import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { CATEGORY_TITLE_FIELD } from "../category/CategoryTitle";
import { LINKSHARING_TITLE_FIELD } from "./LinksharingTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const LinksharingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="expiration " source="expiration" />
        <TextField label="ID" source="id" />
        <TextField label="link" source="link" />
        <ReferenceField label="sharingid" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Linkcategory"
          target="LinksharingId"
          label="linkcategories"
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
            <ReferenceField
              label="linkid"
              source="linksharing.id"
              reference="Linksharing"
            >
              <TextField source={LINKSHARING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
