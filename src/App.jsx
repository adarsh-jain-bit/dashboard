import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Orders from "./pages/Orders";
import DashboardPage from "./components/sections/dashboard";
import Ecommerce from "./components/sections/Ecommerce";

function App() {
  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<DashboardPage />}>
          
          <Route index element={<Ecommerce />} />
         
          <Route path="orders" element={<Orders />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
