import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { LinkcategoryTitle } from "../linkcategory/LinkcategoryTitle";
import { UserTitle } from "../user/UserTitle";

export const LinksharingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="expiration " source="expiration" />
        <TextInput label="link" source="link" />
        <ReferenceArrayInput
          source="linkcategories"
          reference="Linkcategory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LinkcategoryTitle} />
        </ReferenceArrayInput>
        <ReferenceInput source="user.id" reference="User" label="sharingid">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
