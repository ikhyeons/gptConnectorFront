"use client";
import React, { useEffect, useState } from "react";
import style from "./main.module.scss";
import Join from "./Join";
import Login from "./Login";
function ActionDiv() {
  const [step, setStep] = useState("login");
  useEffect(() => {
    console.log(step);
  }, [step]);
  return (
    <section className={style.actionDiv}>
      {step == "login" && <Login step={step} setStep={setStep} />}
      {step == "join" && <Join step={step} setStep={setStep} />}
    </section>
  );
}

export default ActionDiv;
