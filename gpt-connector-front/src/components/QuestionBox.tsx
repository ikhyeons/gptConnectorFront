"use client";

import { useState } from "react";

type Props = {
  data: { question: string; answer: string; date: string };
  index: number;
};

const QuestionBox = (props: Props) => {
  const { question, answer, date } = props.data;
  const [isClick, setIsClick] = useState(false);

  return (
    <div
      className="question_box"
      key={props.index}
      onClick={() => {
        setIsClick(!isClick);
      }}
    >
      <div className="question">
        <span>Q {question}</span>
        <span>{date}</span>
      </div>
      <div className={isClick === false ? "answer_off" : "answer_on"}>
        <span>A {answer}</span>
      </div>
    </div>
  );
};

export default QuestionBox;
