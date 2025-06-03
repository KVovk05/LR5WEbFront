import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AvailableInitiatives from "./pages/availableInit";
import MyInitiatives from "./pages/myIniti";
import OrganizationInfo from "./pages/aboutUs";
import MainPage from "./pages/index";
import RegInitForm from "./components/form-reg-init/reg-init";
import InitiativePage from "./components/initInfo/initInfo";
import "./firebase/firebase";
import RegistrationForm from './pages/RegistrationForm';
import LoginForm from './pages/LoginForm';

import UserAccount from './pages/UserAccount';

function App() {
  
  return (
    
    <Router>
     

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/my" element={<MyInitiatives />} />
        <Route path="/about" element={<OrganizationInfo />} />
        <Route path="/available" element={<AvailableInitiatives />} />
        <Route path="/reginit" element={<RegInitForm />} />
        <Route path="/available/:id" element={<InitiativePage />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/account" element={<UserAccount />} />
      </Routes>
      
    </Router>
  );
}

export default App;
