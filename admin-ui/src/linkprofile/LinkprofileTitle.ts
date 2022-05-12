import { Linkprofile as TLinkprofile } from "../api/linkprofile/Linkprofile";

export const LINKPROFILE_TITLE_FIELD = "title";

export const LinkprofileTitle = (record: TLinkprofile): string => {
  return record.title || record.id;
};
