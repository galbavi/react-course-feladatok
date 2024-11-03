import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllDogs } from "./AllDogs";
import { Page404 } from "./Page404";
import { NewDog } from "./NewDog";
import { DataProvider } from "./DataConext";
import { Dog } from "./Dog";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AllDogs />} />
          <Route path="/new" element={<NewDog />} />
          <Route path="/dog/:id" element={<Dog />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
