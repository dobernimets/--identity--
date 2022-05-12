import { Fileprofile as TFileprofile } from "../api/fileprofile/Fileprofile";

export const FILEPROFILE_TITLE_FIELD = "title";

export const FileprofileTitle = (record: TFileprofile): string => {
  return record.title || record.id;
};
