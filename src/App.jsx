import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./components/Layout";
import AuthLayout from "./components/Authlayout";
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
