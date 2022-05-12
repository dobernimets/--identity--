import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { DatarequestTitle } from "../datarequest/DatarequestTitle";
import { DatasuggestionTitle } from "../datasuggestion/DatasuggestionTitle";
import { FileprofileTitle } from "../fileprofile/FileprofileTitle";
import { LinkcategoryTitle } from "../linkcategory/LinkcategoryTitle";
import { LinkprofileTitle } from "../linkprofile/LinkprofileTitle";
import { ProfileviewTitle } from "../profileview/ProfileviewTitle";
import { TemplatecategoryTitle } from "../templatecategory/TemplatecategoryTitle";

export const CategoryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="categoryname" source="categoryname" />
        <ReferenceArrayInput
          source="datarequests"
          reference="Datarequest"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DatarequestTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="datasuggestions"
          reference="Datasuggestion"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={DatasuggestionTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="fileprofiles"
          reference="Fileprofile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={FileprofileTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="linkcategories"
          reference="Linkcategory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LinkcategoryTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="linkprofiles"
          reference="Linkprofile"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={LinkprofileTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="profileviews"
          reference="Profileview"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ProfileviewTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="templatecategories"
          reference="Templatecategory"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TemplatecategoryTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
