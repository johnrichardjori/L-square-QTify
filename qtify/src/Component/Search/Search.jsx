import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assests/search-icon.svg";
import useAutocomplete from "@mui/base/useAutocomplete";
import { styled } from "@mui/system";
// import {truncate} from "../../helpers/helpers";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@mui/material";

export default function Search({ placeholder }) {
  return (
    <div>
      <input name="album" className={styles.search} placeholder={placeholder} />
      <button className={styles.searchButton} type="submit">
        <SearchIcon />
      </button>
    </div>
  );
}
