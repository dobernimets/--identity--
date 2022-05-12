import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CategoryTitle } from "../category/CategoryTitle";
import { LinksharingTitle } from "../linksharing/LinksharingTitle";

export const LinkcategoryCreate = (props: CreateProps): React.ReactElement => {
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
        <ReferenceInput
          source="linksharing.id"
          reference="Linksharing"
          label="linkid"
        >
          <SelectInput optionText={LinksharingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
