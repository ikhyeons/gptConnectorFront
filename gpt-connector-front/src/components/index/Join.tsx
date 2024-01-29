"use client";
import baseURL from "@/utils/baseURL";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import style from "./lj.module.scss";

function Join({ step, setStep }: { step: any; setStep: any }) {
  const [joinUserInfo, setJoinUserInfo] = useState({ ma: "", pw: "" });
  const [passwordCheck, setPasswordCheck] = useState("");
  const router = useRouter();
  return (
    <>
      <div className={style.formDiv}>
        <div className={style.inputDiv}>
          <label htmlFor="mcNum">기기번호</label>
          <input
            placeholder="4자리 mac번호 입력"
            value={joinUserInfo.ma}
            onChange={(e) => {
              setJoinUserInfo((prev) => ({ ...prev, ma: e.target.value }));
            }}
            name="ma"
            id="mcNum"
            type="text"
          />
        </div>
        <div className={style.inputDiv}>
          <label htmlFor="pw">비밀번호</label>
          <input
            onChange={(e) => {
              setJoinUserInfo((prev) => ({ ...prev, pw: e.target.value }));
            }}
            name="pw"
            id="pw"
            type="password"
          />
        </div>
        <div className={style.inputDiv}>
          <label htmlFor="pwCheck">비밀번호 확인</label>
          <input
            onChange={(e) => {
              setPasswordCheck(e.target.value);
            }}
            id="pwCheck"
            type="password"
          />
        </div>
        <div className={style.btnWrap}>
          <button
            className={`${style.btn} ${style.btnfilled}`}
            onClick={() => {
              setStep("login");
            }}
          >
            이전
          </button>
          <button
            className={`${style.btn} ${style.btnfilled}`}
            type="submit"
            onClick={async (e) => {
              e.preventDefault();

              if (joinUserInfo.ma.length > 4) {
                alert("입력값이 4보다 큽니다");
              } else if (joinUserInfo.pw != passwordCheck) {
                alert("비밀번호와 비밀번호 확인이 다릅니다.");
              } else if (
                joinUserInfo.ma.length == 0 ||
                joinUserInfo.pw.length == 0
              ) {
                alert("기기번호 또는 비밀번호는 공란이 될 수 없습니다.");
              } else {
                const returnData = await (
                  await fetch(`${baseURL}/join`, {
                    headers: {
                      "Content-Type": "application/json",
                    },
                    method: "POST",
                    credentials: "include",
                    body: JSON.stringify(joinUserInfo),
                  })
                ).json();
                console.log(returnData.success);
                if (returnData.success == 0) {
                  alert("중복된 mc번호");
                  window.location.reload();
                } else if (returnData.success == 1) {
                  alert("가입성공");
                  window.location.reload();
                }
              }
            }}
          >
            등록
          </button>
        </div>
      </div>
    </>
  );
}

export default Join;
