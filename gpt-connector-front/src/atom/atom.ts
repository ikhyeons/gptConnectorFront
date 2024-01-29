import { atom } from "recoil";

type QnaList = {
  ma: string;
  num: number;
  req: string;
  reqdate: string;
  res: string;
};

export const qnaList = atom<QnaList[]>({
  key: "qnaList",
  default: [],
});

export const filteredQnaList = atom({
  key: "filteredQnaList",
  default: qnaList,
});
