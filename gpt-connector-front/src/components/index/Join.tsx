"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Join({ step, setStep }: { step: any; setStep: any }) {
  const [joinUserInfo, setJoinUserInfo] = useState({ ma: "", pw: "" });
  const router = useRouter();
  return (
    <div>
      <form action="http://localhost:2000/join" method="post">
        <div className="inputDiv">
          <label htmlFor="mcNum">기기번호</label>
          <input
            onChange={(e) => {
              setJoinUserInfo((prev) => ({ ...prev, ma: e.target.value }));
            }}
            name="ma"
            id="mcNum"
            type="text"
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="pw">비밀번호</label>
          <input
            onChange={(e) => {
              setJoinUserInfo((prev) => ({ ...prev, pw: e.target.value }));
            }}
            name="pw"
            id="pw"
            type="text"
          />
        </div>
        <div className="inputDiv">
          <label htmlFor="pwCheck">비밀번호 확인</label>
          <input id="pwCheck" type="text" />
        </div>
        <button
          onClick={() => {
            setStep("normal");
          }}
        >
          이전
        </button>
        <button
          type="submit"
          onClick={async (e) => {
            e.preventDefault();
            const returnData = await (
              await fetch("http://localhost:2000/join", {
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
          }}
        >
          등록
        </button>
      </form>
    </div>
  );
}

export default Join;
