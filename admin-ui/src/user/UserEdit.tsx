import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  BooleanInput,
  ReferenceInput,
  SelectInput,
  PasswordInput,
} from "react-admin";

import { DatarequestTitle } from "../datarequest/DatarequestTitle";
import { DatasuggestionTitle } from "../datasuggestion/DatasuggestionTitle";
import { GroupTitle } from "../group/GroupTitle";
import { EnumblockuserTitle } from "../enumblockuser/EnumblockuserTitle";
import { LinksharingTitle } from "../linksharing/LinksharingTitle";
import { MembergroupTitle } from "../membergroup/MembergroupTitle";
import { MyidentityTitle } from "../myidentity/MyidentityTitle";
import { ProfileTitle } from "../profile/ProfileTitle";
import { ProfileviewTitle } from "../profileview/ProfileviewTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="apartment" source="apartment" />
        <TextInput label="city" source="city" />
        <TextInput label="country" source="country" />
        <ReferenceArrayInput
          source="datarequestsaskid"
          reference="Datarequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DatarequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="datarequestsreceiveid"
          reference="Datarequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DatarequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="datasuggestionsreceiveid"
          reference="Datasuggestion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DatasuggestionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="datasuggestionssuggestionid"
          reference="Datasuggestion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DatasuggestionTitle} />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <ReferenceArrayInput
          source="groupsownerid"
          reference="Group"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={GroupTitle} />
        </ReferenceArrayInput>
        <TextInput label="housnumber" source="housnumber" />
        <TextInput label="image" source="image" />
        <BooleanInput label="isactive" source="isactive" />
        <ReferenceInput
          source="enumblockuser.id"
          reference="Enumblockuser"
          label="isblocked"
        >
          <SelectInput optionText={EnumblockuserTitle} />
        </ReferenceInput>
        <BooleanInput label="isregistered" source="isregistered" />
        <TextInput label="Last Name" source="lastName" />
        <ReferenceArrayInput
          source="linksharings"
          reference="Linksharing"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LinksharingTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="membergroups"
          reference="Membergroup"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MembergroupTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="myidentitiesidentityid"
          reference="Myidentity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MyidentityTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="myidentitiesmyidentitycontactid"
          reference="Myidentity"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={MyidentityTitle} />
        </ReferenceArrayInput>
        <PasswordInput label="Password" source="password" />
        <TextInput label="phone" source="phone" />
        <ReferenceArrayInput
          source="profiles"
          reference="Profile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProfileTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="profileviewsidentityid"
          reference="Profileview"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProfileviewTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="profileviewswatchid"
          reference="Profileview"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProfileviewTitle} />
        </ReferenceArrayInput>
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <TextInput label="street" source="street" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
