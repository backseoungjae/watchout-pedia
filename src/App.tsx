import React from "react";
import { BrowserRouter as Rouer, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import MovieDetail from "./pages/MovieDetail";
import TvDetail from "./pages/TvDetail";
import TvPage from "./pages/TvPage";

function App() {
  return (
    <Rouer>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/tv" element={<TvPage />} />
        <Route path="/tv/:id" element={<TvDetail />} />
      </Routes>
    </Rouer>
  );
}

export default App;
