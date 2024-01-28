"use client";

import { filteredQnaList } from "@/atom/atom";
import { useRecoilValue } from "recoil";
import QuestionBox from "./QuestionBox";

const ContentBox = () => {
  const qna = useRecoilValue(filteredQnaList);

  return (
    <div className="viewer_body">
      {qna.map((data: { question: string; answer: string; date: string }, index: number) => {
        return <QuestionBox data={data} index={index} key={index} />;
      })}
    </div>
  );
};

export default ContentBox;
