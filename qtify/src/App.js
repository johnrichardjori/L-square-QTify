import React, {useEffect} from "react";
// import Hero from "./components/Hero/Hero";
// import HomePage from "./Pages/HomePage/HomePage";
import Navbar from "./Component/Navbar/Navbar";
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
// import { Outlet } from "react-router-dom";
// import { fetchNewAlbums, fetchSongs, fetchTopAlbums} from "./api/api";

function App() {

// const [data, setData] = useState({});

return(
  <div>
  <StyledEngineProvider injectFirst>
	<Navbar />
  </StyledEngineProvider>
 </div> 
);
}

export default App;

