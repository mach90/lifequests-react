/* //////////////////////////////////////////////////
IMPORT - REACT ROUTER DOM
////////////////////////////////////////////////// */
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

/* //////////////////////////////////////////////////
IMPORT - TANSTACK REACT QUERY
////////////////////////////////////////////////// */
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

/* //////////////////////////////////////////////////
IMPORT - UI & PAGES
////////////////////////////////////////////////// */
import ProtectedRoute from "./ui/ProtectedRoute";
import AppLayout from "./ui/AppLayout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Forgot from "./pages/Forgot";
import Reset from "./pages/Reset";
import Character from "./pages/Character";
import Settings from "./pages/Settings";
import SettingsProfile from "./pages/SettingsProfile";
import SettingsSecurity from "./pages/SettingsSecurity";
import SettingsAdmin from "./pages/SettingsAdmin";
import SettingsApp from "./pages/SettingsApp";
import Skills from "./pages/Skills";
import Guilds from "./pages/Guilds";
import Guild from "./pages/Guild";
import Quests from "./pages/Quests";
import Quest from "./pages/Quest";
import Contracts from "./pages/Contracts";
import Contract from "./pages/Contract";
import Inventory from "./pages/Inventory";
import Item from "./pages/Item";
import PageNotFound from "./pages/PageNotFound";

/* //////////////////////////////////////////////////
IMPORT - TOASTER
////////////////////////////////////////////////// */
import { Toaster } from "react-hot-toast";

/* //////////////////////////////////////////////////
TANSTACK QUERYCLIENT
////////////////////////////////////////////////// */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000,
    }
  }
});

/* //////////////////////////////////////////////////
APP COMPONENT
////////////////////////////////////////////////// */
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoute><AppLayout /></ProtectedRoute>}>
            <Route index element={<Navigate replace to="character" />} />
            <Route path="character" element={<Character />} />
            <Route path="settings" element={<Settings />}>
              <Route index element={<Navigate to="profile" />} />
              <Route path="profile" element={<SettingsProfile />} />
              <Route path="security" element={<SettingsSecurity />} />
              <Route path="admin" element={<SettingsAdmin />} />
              <Route path="app-settings" element={<SettingsApp />} />
            </Route>
            <Route path="skills" element={<Skills />} />
            <Route path="guilds" element={<Guilds />}>
              <Route path="/guilds/:guildId" element={<Guild />} />
            </Route>
            <Route path="quests" element={<Quests />}>
              <Route path="/quests/:questId" element={<Quest />} />
            </Route>
            <Route path="contracts" element={<Contracts />}>
              <Route path="/contracts/:contractId" element={<Contract />} />
            </Route>
            <Route path="inventory" element={<Inventory />}>
              <Route path="/inventory/item/:itemId" element={<Item />} />
            </Route>
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="reset/:token" element={<Reset />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster 
          position="top-center"
          gutter={12}
          containerStyle={{margin: "8px"}}
          toastOptions={{
            success: {
              duration: 3000,
            },
            error: {
              duration: 6000,
            },
            style: {
              fontSize: "16px",
              maxWidth: "500px",
              padding: "16px 24px",
              backgroundColor: "#324155",
              color: "white",
            }
          }}
      />
    </QueryClientProvider>
  );
}

export default App;