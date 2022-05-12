import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
  BooleanField,
} from "react-admin";

import { USER_TITLE_FIELD } from "../user/UserTitle";
import { CATEGORY_TITLE_FIELD } from "./CategoryTitle";
import { PROFILE_TITLE_FIELD } from "../profile/ProfileTitle";
import { LINKSHARING_TITLE_FIELD } from "../linksharing/LinksharingTitle";
import { TEMPLATE_TITLE_FIELD } from "../template/TemplateTitle";

export const CategoryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="categoryname" source="categoryname" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Datarequest"
          target="CategoryId"
          label="datarequests"
        >
          <Datagrid rowClick="show">
            <ReferenceField label="askid" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField label="isactivereq" source="isactivereq" />
            <ReferenceField label="receiveid" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="reqcategoryid"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Datasuggestion"
          target="CategoryId"
          label="datasuggestions"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <BooleanField
              label="isactivesuggestion"
              source="isactivesuggestion"
            />
            <ReferenceField label="receiveid" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="status" source="status" />
            <ReferenceField
              label="suggestioncategoryid"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="suggestionid"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Fileprofile"
          target="CategoryId"
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
          reference="Linkcategory"
          target="CategoryId"
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
        <ReferenceManyField
          reference="Linkprofile"
          target="CategoryId"
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
        <ReferenceManyField
          reference="Profileview"
          target="CategoryId"
          label="profileviews"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="identityid"
              source="user.id"
              reference="User"
            >
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="viewcategoryid"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField label="watchid" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Templatecategory"
          target="CategoryId"
          label="templatecategories"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="caregoryid"
              source="category.id"
              reference="Category"
            >
              <TextField source={CATEGORY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="templateid"
              source="template.id"
              reference="Template"
            >
              <TextField source={TEMPLATE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
