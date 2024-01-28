import { atom } from "recoil";

export const qnaList = atom({
  key: "qnaList",
  default: [
    {
      question: "질문1입니다.",
      answer: "답변입니다.",
      date: "2024.01.27-12:36:47",
    },
    {
      question: "질문2입니다.",
      answer: "답변입니다.",
      date: "2024.01.27-12:37:47",
    },
  ],
});

export const filteredQnaList = atom({
  key: "filteredQnaList",
  default: qnaList,
});
