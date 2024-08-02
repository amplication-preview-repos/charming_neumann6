import { Wig as TWig } from "../api/wig/Wig";

export const WIG_TITLE_FIELD = "title";

export const WigTitle = (record: TWig): string => {
  return record.title?.toString() || String(record.id);
};
