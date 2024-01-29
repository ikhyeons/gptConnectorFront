"use client";

import { useRouter } from "next/navigation";
import { Cookies } from "react-cookie";

const LogOutButton = () => {
  const router = useRouter();
  return (
    <button
      className="log_out_button"
      onClick={() => {
        new Cookies().remove("mc");
        new Cookies().remove("token");
        router.replace("/");
      }}
    >
      로그아웃
    </button>
  );
};

export default LogOutButton;
