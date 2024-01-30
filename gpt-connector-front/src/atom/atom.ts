import { atom, selector } from "recoil";

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

export const filterState = atom({
  key: "filterState",
  default: "all",
});

export const searchInputState = atom({
  key: "searchInput",
  default: "",
});

export const filteredQnaList = selector({
  key: "filteredQnaList",
  get: ({ get }) => {
    const filter = get(filterState);
    const list = get(qnaList);
    const input = get(searchInputState);

    switch (filter) {
      case "question":
        return list.filter((data) => data.req.includes(input));
      case "answer":
        return list.filter((data) => data.res.includes(input));
      default:
        return list;
    }
  },
});
