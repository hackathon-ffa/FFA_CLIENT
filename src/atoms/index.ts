import { atom } from "recoil";

export const currentTabAtom = atom({
  key: "currentTabAtom",
  default: 0,
});

export const selectedFiltersAtom = atom<string[]>({
  key: "selectedFiltersAtom",
  default: [],
});

export const isWorkingAtom = atom({
  key: "isWorkingAtom",
  default: false,
});
