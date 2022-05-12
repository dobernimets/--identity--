import { Linksharing as TLinksharing } from "../api/linksharing/Linksharing";

export const LINKSHARING_TITLE_FIELD = "link";

export const LinksharingTitle = (record: TLinksharing): string => {
  return record.link || record.id;
};
