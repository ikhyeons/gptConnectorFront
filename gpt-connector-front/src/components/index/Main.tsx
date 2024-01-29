"use client";
import React, { useEffect } from "react";
import style from "./main.module.scss";
import ActionDiv from "./actionDiv";
import { useCookies } from "react-cookie";
import { useRouter } from "next/navigation";
function Main() {
  const [cookies, setcookie, deleteCookie] = useCookies(["token"]);
  const router = useRouter();
  useEffect(() => {
    if (cookies.token) router.push("/viewer");
  }, []);
  return (
    <main className={style.main}>
      <img className={style.imageDiv} src="/background1.jpg" alt="" />
      <ActionDiv />
    </main>
  );
}

export default Main;
