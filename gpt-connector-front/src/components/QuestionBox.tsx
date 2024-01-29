"use client";

import { filteredQnaList } from "@/atom/atom";
import { useState } from "react";
import { useRecoilValue } from "recoil";
import { getTimeByNow } from "./getTime";

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
      <div className="date">
        <span>{getTimeByNow(qna[index].reqdate)}</span>
      </div>
      <div className="question">
        <span>질문 : {qna[index].req}</span>
      </div>
      <div className={isClick === false ? "answer_off" : "answer_on"}>
        <span>답변 : {qna[index].res}</span>
      </div>
    </div>
  );
};

export default QuestionBox;
