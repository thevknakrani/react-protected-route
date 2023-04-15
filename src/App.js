import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import ErrPage from "./components/ErrPage";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import ProfilePage from "./components/ProfilePage";
import AdminPanel from "./components/AdminPanel";
import SuperAdminPanel from "./components/SuperAdminPanel";

function App() {
  // dadasd
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/admin-panel" element={<AdminPanel />} />
        <Route path="/super-admin-panel" element={<SuperAdminPanel />} />
        <Route path="*" element={<ErrPage />} />
      </Routes>
    </div>
  );
}

export default App;
