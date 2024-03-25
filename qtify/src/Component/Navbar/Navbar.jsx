import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import styles from "./Navbar.module.css";

export default function Navbar({ searchData }) {
  return (
    <nav>
      <div className={styles.navbar}>
        <Link to="/">
          <Logo />
        </Link>
        <Search
          placeholder="Search a song of your choice"
          searchData={searchData}
        />
        <Button>Give Feedback</Button>
      </div>
    </nav>
  );
}
