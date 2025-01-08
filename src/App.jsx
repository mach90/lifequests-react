/* //////////////////////////////////////////////////
IMPORT - REACT ROUTER DOM
////////////////////////////////////////////////// */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

/* //////////////////////////////////////////////////
IMPORT - UI/PAGES
////////////////////////////////////////////////// */
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Character from "./pages/Character";
import Account from "./pages/Account";
import Skills from "./pages/Skills";
import Guilds from "./pages/Guilds";
import Quests from "./pages/Quests";
import Inventory from "./pages/Inventory";
import PageNotFound from "./pages/PageNotFound";

/* //////////////////////////////////////////////////
APP COMPONENT
////////////////////////////////////////////////// */
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="character" />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="character" element={<Character />} />
            <Route path="account" element={<Account />} />
            <Route path="skills" element={<Skills />} />
            <Route path="guilds" element={<Guilds />} />
            <Route path="quests" element={<Quests />} />
            <Route path="inventory" element={<Inventory />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;