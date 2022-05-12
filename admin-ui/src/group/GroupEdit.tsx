import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { MembergroupTitle } from "../membergroup/MembergroupTitle";
import { UserTitle } from "../user/UserTitle";
import { TemplateTitle } from "../template/TemplateTitle";

export const GroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="membergroups"
          reference="Membergroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MembergroupTitle} />
        </ReferenceArrayInput>
        <TextInput label="namegroup" source="namegroup" />
        <ReferenceInput source="user.id" reference="User" label="ownerid">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="template.id"
          reference="Template"
          label="templateid"
        >
          <SelectInput optionText={TemplateTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
