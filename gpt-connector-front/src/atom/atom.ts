import { atom } from "recoil";

export const qnaList = atom<QnaList[]>({
  key: "qnaList",
  default: [],
});

export const filteredQnaList = atom({
  key: "filteredQnaList",
  default: qnaList,
});
