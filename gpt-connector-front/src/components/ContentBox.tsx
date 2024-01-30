"use client";

import { filteredQnaList, qnaList } from "@/atom/atom";
import baseURL from "@/utils/baseURL";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Cookies, useCookies } from "react-cookie";
import { useRecoilState, useRecoilValue } from "recoil";
import QuestionBox from "./QuestionBox";

const ContentBox = () => {
  const qna = useRecoilValue(filteredQnaList);
  const [resList, setResList] = useRecoilState(qnaList);
  const [cookies, setcookie, deleteCookie] = useCookies(["token"]);
  const router = useRouter();

  useEffect(() => {
    if (!cookies.token) {
      router.replace("/");
    } else {
      fetch(`${baseURL}/list`, {
        headers: {
          Authorization: new Cookies().get("token"),
        },
        method: "GET",
        credentials: "include",
      })
        .then((res) => res.json())
        .then((res) => {
          setResList(res);
          console.log(res);
        });
    }
  }, []);

  return (
    <div className="viewer_body">
      {qna.map((data: any, index: any) => {
        return <QuestionBox index={index} key={index} />;
      })}
    </div>
  );
};

export default ContentBox;
