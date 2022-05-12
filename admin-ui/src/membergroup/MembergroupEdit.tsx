import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { GroupTitle } from "../group/GroupTitle";
import { UserTitle } from "../user/UserTitle";

export const MembergroupEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="group.id" reference="Group" label="groupid">
          <SelectInput optionText={GroupTitle} />
        </ReferenceInput>
        <ReferenceInput source="user.id" reference="User" label="memberid">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
