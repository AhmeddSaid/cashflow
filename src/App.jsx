import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import Login from "./pages/Login";
import Overview from "./pages/Overview";
import Transactions from "./pages/Transactions";
import { Toaster } from "react-hot-toast";
import AppLayout from "./ui/AppLayout";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const usernameExists = !!localStorage.getItem("username");

  return (
    <>
      <GlobalStyles />
      <BrowserRouter basename="/cashflow/">
        <Routes>
          <Route element={<AppLayout />}>
            {/* If username exists, default to Overview and Transactions */}
            {usernameExists ? (
              <>
                <Route path="/" element={<Overview />} />
                <Route path="/transactions" element={<Transactions />} />
                {/* Redirect to Overview for any other unknown routes */}
                <Route path="*" element={<Navigate replace to="/" />} />
              </>
            ) : (
              <>
                {/* If no username, default to Login */}
                <Route path="/" element={<Login />} />
                {/* Redirect to Login for Overview and Transactions */}
                <Route path="/overview" element={<Navigate replace to="/" />} />
                <Route
                  path="/transactions"
                  element={<Navigate replace to="/" />}
                />
              </>
            )}
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--white-color)",
            color: "var(--main-color)",
            fontFamily: "monospace",
          },
        }}
      />
    </>
  );
}

export default App;
