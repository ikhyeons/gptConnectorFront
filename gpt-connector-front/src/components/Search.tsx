"use client";

import { filteredQnaList, qnaList } from "@/atom/atom";
import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const Search = () => {
  const [filteredQna, setFilteredQna] = useRecoilState(filteredQnaList);
  const qna = useRecoilValue(qnaList);
  const [searchInput, setSearchInput] = useState("");

  const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
    console.log(e.target.value);
  };

  const searchButton = () => {
    if (searchInput !== "") {
      setFilteredQna(qna.filter((data) => data.req.includes(searchInput)));
    } else {
      setFilteredQna(qna);
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
          setFilteredQna(qna);
          searchButton();
        }}
      >
        검색
      </button>
    </div>
  );
};

export default Search;
