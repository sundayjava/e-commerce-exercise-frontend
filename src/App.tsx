import { Route, Routes } from "react-router-dom";
import CustomerRoute from "./Routers/CustomerRoute";
import AdminRouters from "./Routers/AdminRouters";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<CustomerRoute />} />
        <Route path="/admin/*" element={<AdminRouters />} />
      </Routes>
    </div>
  );
}

export default App;
