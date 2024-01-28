"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
function Login({ step, setStep }: { step: any; setStep: any }) {
  const [userLoginInfo, setUserLoginInfo] = useState({ ma: "", pw: "" });
  const router = useRouter();
  return (
    <div>
      <form action="" method="post">
        <div className="inputDiv">
          <label htmlFor="mcNum">기기번호</label>
          <input
            onChange={(e) => {
              setUserLoginInfo((prev) => ({ ...prev, ma: e.target.value }));
            }}
            id="mcNum"
            type="text"
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="pw">비밀번호</label>
          <input
            onChange={(e) => {
              setUserLoginInfo((prev) => ({ ...prev, pw: e.target.value }));
            }}
            id="pw"
            type="text"
          />
        </div>
        <button
          onClick={() => {
            setStep("normal");
          }}
        >
          이전
        </button>
        <button
          onClick={async (e) => {
            e.preventDefault();
            const returnData = await (
              await fetch("http://localhost:2000/login", {
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
              router.push("./viewer");
            } else {
              alert(returnData.message);
            }
          }}
          type="submit"
        >
          로그인
        </button>
      </form>
    </div>
  );
}

export default Login;
