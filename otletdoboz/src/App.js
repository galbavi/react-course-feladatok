import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ListPage from "./screens/list/ListPage";
import { AppBar, Container } from "@mui/material";
import AppMenu from "./components/AppMenu";
import UserPage from "./screens/user/Me";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewPage from "./screens/new/NewPage";
import OneSuggestion from "./components/OneSuggestion";
import DetailPage from "./screens/detail/DetailPage";
import MePage from "./screens/me/Me";
import Page404 from "./screens/404/Page404";
import Providers from "./Providers";

function App() {
  return (
    <Providers>
        <AppMenu />
        <br />
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/me" element={<MePage />} />
          <Route path="/new" element={<NewPage />} />
          <Route path="/suggestion/:id" element={<DetailPage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Providers>
  );
}

export default App;
