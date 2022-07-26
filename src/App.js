import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import About from "./components/About";
import Blog from "./components/Blog";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import ContactUs from "./components/ContactUs";
import ForgotPassword from "./components/ForgotPassword";
import UserHome from "./components/UserHome";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import UpdateDetails from "./components/UpdateDetails";
import Queries from "./components/Queries";
import AdminHome from "./components/AdminHome";
import Faq from "./components/Faq";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="blog" element={<Blog />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/userhome" element={<UserHome />} />
          <Route path="/updatedetails" element={<UpdateDetails />} />
          <Route path="/queries" element={<Queries />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/faq" element={<Faq />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
        
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);