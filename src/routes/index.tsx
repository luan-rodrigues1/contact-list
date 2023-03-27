import { Routes, Route } from "react-router-dom";
import Access from "../pages/access";
import Dashboard from "../pages/dashboard";

const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Access />} />
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default RoutesMain;