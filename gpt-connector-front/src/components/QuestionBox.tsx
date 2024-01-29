"use client";

import { filteredQnaList } from "@/atom/atom";
import { useState } from "react";
import { useRecoilValue } from "recoil";

const QuestionBox = (props: QuestionBoxProps) => {
  const { index } = props;
  const qna = useRecoilValue(filteredQnaList);
  const [isClick, setIsClick] = useState(false);

  return (
    <div
      className="question_box"
      onClick={() => {
        setIsClick(!isClick);
      }}
    >
      <div className="question">
        <span>Q {qna[index].req}</span>
        <span>{qna[index].reqdate.slice(0, 10) + " " + qna[index].reqdate.slice(11, 19)}</span>
      </div>
      <div className={isClick === false ? "answer_off" : "answer_on"}>
        <span>A {qna[index].res}</span>
      </div>
    </div>
  );
};

export default QuestionBox;
