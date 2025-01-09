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
IMPORT - UI/PAGES
////////////////////////////////////////////////// */
import ProtectedRoute from "./ui/ProtectedRoute";
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
IMPORT - TOASTER
////////////////////////////////////////////////// */
import { Toaster } from "react-hot-toast";

/* //////////////////////////////////////////////////
TANSTACK QUERYCLIENT
////////////////////////////////////////////////// */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5*1000,
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
            <Route path="account" element={<Account />} />
            <Route path="skills" element={<Skills />} />
            <Route path="guilds" element={<Guilds />} />
            <Route path="quests" element={<Quests />} />
            <Route path="inventory" element={<Inventory />} />
          </Route>

          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
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
              backgroundColor: "white",
              color: "black",
            }
          }}
      />
    </QueryClientProvider>
  );
}

export default App;