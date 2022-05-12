import { Datarequest } from "../datarequest/Datarequest";
import { Datasuggestion } from "../datasuggestion/Datasuggestion";
import { Fileprofile } from "../fileprofile/Fileprofile";
import { Linkcategory } from "../linkcategory/Linkcategory";
import { Linkprofile } from "../linkprofile/Linkprofile";
import { Profileview } from "../profileview/Profileview";
import { Templatecategory } from "../templatecategory/Templatecategory";

export type Category = {
  categoryname: string | null;
  createdAt: Date;
  datarequests?: Array<Datarequest>;
  datasuggestions?: Array<Datasuggestion>;
  fileprofiles?: Array<Fileprofile>;
  id: string;
  linkcategories?: Array<Linkcategory>;
  linkprofiles?: Array<Linkprofile>;
  profileviews?: Array<Profileview>;
  templatecategories?: Array<Templatecategory>;
  updatedAt: Date;
};
