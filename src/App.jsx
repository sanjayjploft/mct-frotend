import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Component/Layout";
import AuthLayout from "./Component/AuthLayout";
import Login from "./Pages/Login";
import Weeks from "./Pages/Weeks";
import Home from "./Pages/Home";

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
