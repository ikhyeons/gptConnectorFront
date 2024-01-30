"use client";

import { filteredQnaList, filterState, qnaList, searchInputState } from "@/atom/atom";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const Search = () => {
  const filteredQna = useRecoilValue(filteredQnaList);
  const [filter, setFilter] = useRecoilState(filterState);
  const [inputState, setInputState] = useRecoilState(searchInputState);
  const qna = useRecoilValue(qnaList);

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(e.target.value);
    console.log(e.target.value);
  };

  const searchButton = () => {
    if (inputState !== "") {
      setFilter("question");
      if (filteredQna) {
        setFilter("answer");
      }
    } else {
      setFilter("all");
    }
  };

  const pressEnter = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      searchButton();
    }
  };

  return (
    <div className="search_container">
      <input type="text" className="search_area" placeholder="Search" onChange={getValue} onKeyDown={pressEnter} />
      <button
        className="search_button"
        onClick={() => {
          setFilter("all");
          searchButton();
        }}
      >
        <span className="reading-glasses">
          <span className="reading-glasses__circle"></span>
          <span className="reading-glasses__line"></span>
        </span>
      </button>
    </div>
  );
};

export default Search;
