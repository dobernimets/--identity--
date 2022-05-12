import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { CategoryTitle } from "../category/CategoryTitle";
import { LinksharingTitle } from "../linksharing/LinksharingTitle";

export const LinkcategoryEdit = (props: EditProps): React.ReactElement => {
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
        <ReferenceInput
          source="linksharing.id"
          reference="Linksharing"
          label="linkid"
        >
          <SelectInput optionText={LinksharingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
