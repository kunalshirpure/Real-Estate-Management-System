import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Component/Header/Header";
import Footer from "./Component/Footer/Footer";
import Home from "./Component/Home/Home";
import SignIn from "./Component/SignIn/SignIn";
import SignUp from "./Component/SignUp/SignUp";
import PropertyPage from "./Component/Properties/PropertyPage";
import PostProperty from "./Component/Properties/PostProperty";
import AdminPage from "./Component/Admin/AdminPage";
import OwnerDashboard from "./Component/Dashboard/OwnerDashboard"
function App() {
  return (
    <Router>
      <div>
        <Header></Header> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/properties" element={<PropertyPage />} />
          <Route path="/postproperty" element={<PostProperty />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/owner" element={<OwnerDashboard />} />
          
          {/* Add more routes for other pages */}
        </Routes>
        <Footer></Footer> 
      </div>
    </Router>
  );
}

export default App;
