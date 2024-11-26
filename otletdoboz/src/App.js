import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ListPage from "./screens/list/ListPage";
import { AppBar, Container } from "@mui/material";
import AppMenu from "./components/AppMenu";
import UserPage from "./screens/user/Me";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NewPage from "./screens/new/NewPage";
import OneSuggestion from "./components/OneSuggestion";
import DetailPage from "./screens/detail/DetailPage";
import MePage from "./screens/me/Me";
import Page404 from "./screens/404/Page404";
import Providers from "./Providers";
import { useAuth } from "./hooks/useAuth";

function ProtectedPage({children}) {
  const {authToken} = useAuth();
  if (authToken === false) {
    return <Navigate to={"/"} />;
  }

  return children;
}

function App() {
  return (
    <Providers>
        <AppMenu />
        <br />
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/me" element={<ProtectedPage><MePage /></ProtectedPage>} />
          <Route path="/new" element={<ProtectedPage><NewPage /></ProtectedPage>} />
          <Route path="/suggestion/:id" element={<DetailPage />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </Providers>
  );
}

export default App;
