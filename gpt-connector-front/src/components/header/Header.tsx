import React from "react";
import style from "./header.module.scss";
function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerTitle}>GPT Connector Log</div>
    </header>
  );
}

export default Header;
