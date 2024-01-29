"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCookies } from "react-cookie";
import baseURL from "@/utils/baseURL";
import style from "./lj.module.scss";

function Login({ step, setStep }: { step: any; setStep: any }) {
  const [userLoginInfo, setUserLoginInfo] = useState({ ma: "", pw: "" });
  const router = useRouter();
  const tokenCookie = useCookies(["token"]);
  const mcCookie = useCookies(["mc"]);

  async function submit() {
    const returnData = await (
      await fetch(`${baseURL}/login`, {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        credentials: "include",
        body: JSON.stringify(userLoginInfo),
      })
    ).json();
    if (returnData.code == 200) {
      console.log("로그인 성공 or 토큰 재발급");
      tokenCookie[1]("token", returnData.token, {
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 30,
      });
      mcCookie[1]("mc", returnData.ma, {
        path: "/",
        maxAge: 1000 * 60 * 60 * 24 * 30,
      });

      router.push("./viewer");
    } else {
      alert(returnData.message);
    }
  }
  return (
    <>
      <div className={style.formDiv}>
        <div className={style.inputDiv}>
          <label htmlFor="mcNum">기기번호</label>
          <input
            onChange={(e) => {
              setUserLoginInfo((prev) => ({ ...prev, ma: e.target.value }));
            }}
            onKeyUp={(e) => {
              if (e.key == "Enter") {
                submit();
              }
            }}
            id="mcNum"
            type="text"
          />
        </div>
        <div className={style.inputDiv}>
          <label htmlFor="pw">비밀번호</label>
          <input
            onKeyUp={(e) => {
              if (e.key == "Enter") {
                submit();
              }
            }}
            onChange={(e) => {
              setUserLoginInfo((prev) => ({ ...prev, pw: e.target.value }));
            }}
            id="pw"
            type="text"
          />
        </div>
        <div className={style.btnWrap}>
          <button
            className={`${style.btn} ${style.btnfilled}`}
            onClick={() => {
              setStep("join");
            }}
          >
            기기등록
          </button>
          <button
            className={`${style.btn} ${style.btnfilled}`}
            onClick={submit}
            type="submit"
          >
            로그인
          </button>
        </div>
      </div>
    </>
  );
}

export default Login;
