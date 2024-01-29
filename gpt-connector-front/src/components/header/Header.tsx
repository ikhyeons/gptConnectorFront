import React from "react";
import style from "./header.module.scss";
function Header() {
  return (
    <header className={style.header}>
      <div className={style.headerTitle}>자비스보다는 못하지만</div>
    </header>
  );
}

export default Header;
