import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import AuthLayout from "./components/authLayout";
import Login from "./pages/Login";
import Weeks from "./pages/Weeks";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes (no header) */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Login />} />
        </Route>

        {/* Main app routes (with header) */}
        <Route element={<Layout />}>
          <Route path="/Weeks" element={<Weeks />} />
          <Route path="/Home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
