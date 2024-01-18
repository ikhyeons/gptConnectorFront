import React from "react";
import style from "./main.module.scss";
function Form({ step, setStep }: { step: any; setStep: any }) {
  return (
    <div className={style.form}>
      <button
        onClick={() => {
          setStep("join");
        }}
        className={style.joinBtn}
      >
        기기등록
      </button>
      <button
        onClick={() => {
          setStep("login");
        }}
        className={style.loginBtn}
      >
        로그인
      </button>
    </div>
  );
}

export default Form;
