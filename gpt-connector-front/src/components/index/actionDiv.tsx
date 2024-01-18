"use client";
import React, { useEffect, useState } from "react";
import style from "./main.module.scss";
import Form from "./Form";
import Join from "./Join";
import Login from "./Login";
function ActionDiv() {
  const [step, setStep] = useState("normal");
  useEffect(() => {
    console.log(step);
  }, [step]);
  return (
    <section className={style.actionDiv}>
      {step == "normal" && <Form step={step} setStep={setStep} />}
      {step == "join" && <Join />}
      {step == "login" && <Login />}
    </section>
  );
}

export default ActionDiv;
