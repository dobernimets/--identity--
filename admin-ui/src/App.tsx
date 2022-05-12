import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { TemplateList } from "./template/TemplateList";
import { TemplateCreate } from "./template/TemplateCreate";
import { TemplateEdit } from "./template/TemplateEdit";
import { TemplateShow } from "./template/TemplateShow";
import { GroupList } from "./group/GroupList";
import { GroupCreate } from "./group/GroupCreate";
import { GroupEdit } from "./group/GroupEdit";
import { GroupShow } from "./group/GroupShow";
import { MyidentityList } from "./myidentity/MyidentityList";
import { MyidentityCreate } from "./myidentity/MyidentityCreate";
import { MyidentityEdit } from "./myidentity/MyidentityEdit";
import { MyidentityShow } from "./myidentity/MyidentityShow";
import { CategoryList } from "./category/CategoryList";
import { CategoryCreate } from "./category/CategoryCreate";
import { CategoryEdit } from "./category/CategoryEdit";
import { CategoryShow } from "./category/CategoryShow";
import { TemplatecategoryList } from "./templatecategory/TemplatecategoryList";
import { TemplatecategoryCreate } from "./templatecategory/TemplatecategoryCreate";
import { TemplatecategoryEdit } from "./templatecategory/TemplatecategoryEdit";
import { TemplatecategoryShow } from "./templatecategory/TemplatecategoryShow";
import { DatasuggestionList } from "./datasuggestion/DatasuggestionList";
import { DatasuggestionCreate } from "./datasuggestion/DatasuggestionCreate";
import { DatasuggestionEdit } from "./datasuggestion/DatasuggestionEdit";
import { DatasuggestionShow } from "./datasuggestion/DatasuggestionShow";
import { DatarequestList } from "./datarequest/DatarequestList";
import { DatarequestCreate } from "./datarequest/DatarequestCreate";
import { DatarequestEdit } from "./datarequest/DatarequestEdit";
import { DatarequestShow } from "./datarequest/DatarequestShow";
import { ProfileviewList } from "./profileview/ProfileviewList";
import { ProfileviewCreate } from "./profileview/ProfileviewCreate";
import { ProfileviewEdit } from "./profileview/ProfileviewEdit";
import { ProfileviewShow } from "./profileview/ProfileviewShow";
import { ProfileList } from "./profile/ProfileList";
import { ProfileCreate } from "./profile/ProfileCreate";
import { ProfileEdit } from "./profile/ProfileEdit";
import { ProfileShow } from "./profile/ProfileShow";
import { LinksharingList } from "./linksharing/LinksharingList";
import { LinksharingCreate } from "./linksharing/LinksharingCreate";
import { LinksharingEdit } from "./linksharing/LinksharingEdit";
import { LinksharingShow } from "./linksharing/LinksharingShow";
import { LinkcategoryList } from "./linkcategory/LinkcategoryList";
import { LinkcategoryCreate } from "./linkcategory/LinkcategoryCreate";
import { LinkcategoryEdit } from "./linkcategory/LinkcategoryEdit";
import { LinkcategoryShow } from "./linkcategory/LinkcategoryShow";
import { FileprofileList } from "./fileprofile/FileprofileList";
import { FileprofileCreate } from "./fileprofile/FileprofileCreate";
import { FileprofileEdit } from "./fileprofile/FileprofileEdit";
import { FileprofileShow } from "./fileprofile/FileprofileShow";
import { LinkprofileList } from "./linkprofile/LinkprofileList";
import { LinkprofileCreate } from "./linkprofile/LinkprofileCreate";
import { LinkprofileEdit } from "./linkprofile/LinkprofileEdit";
import { LinkprofileShow } from "./linkprofile/LinkprofileShow";
import { EnumblockuserList } from "./enumblockuser/EnumblockuserList";
import { EnumblockuserCreate } from "./enumblockuser/EnumblockuserCreate";
import { EnumblockuserEdit } from "./enumblockuser/EnumblockuserEdit";
import { EnumblockuserShow } from "./enumblockuser/EnumblockuserShow";
import { MembergroupList } from "./membergroup/MembergroupList";
import { MembergroupCreate } from "./membergroup/MembergroupCreate";
import { MembergroupEdit } from "./membergroup/MembergroupEdit";
import { MembergroupShow } from "./membergroup/MembergroupShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My app"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Template"
          list={TemplateList}
          edit={TemplateEdit}
          create={TemplateCreate}
          show={TemplateShow}
        />
        <Resource
          name="Group"
          list={GroupList}
          edit={GroupEdit}
          create={GroupCreate}
          show={GroupShow}
        />
        <Resource
          name="Myidentity"
          list={MyidentityList}
          edit={MyidentityEdit}
          create={MyidentityCreate}
          show={MyidentityShow}
        />
        <Resource
          name="Category"
          list={CategoryList}
          edit={CategoryEdit}
          create={CategoryCreate}
          show={CategoryShow}
        />
        <Resource
          name="Templatecategory"
          list={TemplatecategoryList}
          edit={TemplatecategoryEdit}
          create={TemplatecategoryCreate}
          show={TemplatecategoryShow}
        />
        <Resource
          name="Datasuggestion"
          list={DatasuggestionList}
          edit={DatasuggestionEdit}
          create={DatasuggestionCreate}
          show={DatasuggestionShow}
        />
        <Resource
          name="Datarequest"
          list={DatarequestList}
          edit={DatarequestEdit}
          create={DatarequestCreate}
          show={DatarequestShow}
        />
        <Resource
          name="Profileview"
          list={ProfileviewList}
          edit={ProfileviewEdit}
          create={ProfileviewCreate}
          show={ProfileviewShow}
        />
        <Resource
          name="Profile"
          list={ProfileList}
          edit={ProfileEdit}
          create={ProfileCreate}
          show={ProfileShow}
        />
        <Resource
          name="Linksharing"
          list={LinksharingList}
          edit={LinksharingEdit}
          create={LinksharingCreate}
          show={LinksharingShow}
        />
        <Resource
          name="Linkcategory"
          list={LinkcategoryList}
          edit={LinkcategoryEdit}
          create={LinkcategoryCreate}
          show={LinkcategoryShow}
        />
        <Resource
          name="Fileprofile"
          list={FileprofileList}
          edit={FileprofileEdit}
          create={FileprofileCreate}
          show={FileprofileShow}
        />
        <Resource
          name="Linkprofile"
          list={LinkprofileList}
          edit={LinkprofileEdit}
          create={LinkprofileCreate}
          show={LinkprofileShow}
        />
        <Resource
          name="Enumblockuser"
          list={EnumblockuserList}
          edit={EnumblockuserEdit}
          create={EnumblockuserCreate}
          show={EnumblockuserShow}
        />
        <Resource
          name="Membergroup"
          list={MembergroupList}
          edit={MembergroupEdit}
          create={MembergroupCreate}
          show={MembergroupShow}
        />
      </Admin>
    </div>
  );
};

export default App;
