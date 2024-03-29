import React, { useEffect, useState } from "react";
import Hero from "./Component/Hero/Hero";
import HomePage from "./Pages/HomePage/HomePage";
import Navbar from "./Component/Navbar/Navbar";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import { Outlet } from "react-router-dom";
import { fetchNewAlbums, fetchSongs, fetchTopAlbums } from "./api/api";

function App() {
  const [data, setData] = useState({});

  const generateData = (key, source) => {
    source().then((data) => {
      setData((prevState) => {
        return { ...prevState, [key]: data };
      });
    });
  };

  useEffect(() => {
    generateData("topAlbums", fetchTopAlbums);
    generateData("newAlbums", fetchNewAlbums);
    generateData("songs", fetchSongs);
  }, []);

  const { topAlbums = [], newAlbums = [], songs = [] } = data;

  return (
    <div>
      <StyledEngineProvider injectFirst>
        <Navbar />
        {<Outlet context={{ data: { topAlbums, newAlbums, songs } }} />}
      </StyledEngineProvider>
    </div>
  );
}

export default App;
