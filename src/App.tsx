import { Route, Routes } from "react-router-dom";
import CustomerRoute from "./Routers/CustomerRoute";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/*" element={<CustomerRoute />} />
      </Routes>
    </div>
  );
}

export default App;
