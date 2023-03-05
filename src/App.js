import "./App.css";
import { Routes, Route } from "react-router-dom";

import { AuthProvider } from "./context/authContext";
import ProtectedRoute from "./components/protectedRoute";
import { ToastContainer } from "react-toastify";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Employees from "./components/employees";
import Jobs from "./components/jobs";
import Promotions from "./components/promotions";
import Vacations from "./components/vacations";
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Dashboard />
        {/* <div className="container"> */}
        <Routes>
          <Route element={<ProtectedRoute />}>
            <Route path="/employees" element={<Employees />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="/promotions" element={<Promotions />} />
            <Route path="/vacations" element={<Vacations />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
        <ToastContainer />
        {/* </div> */}
      </AuthProvider>
    </div>
  );
}

export default App;
