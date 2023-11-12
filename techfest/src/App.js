import Navbar from "./mycomponent/Navbar";
import Home from "./mycomponent/Home";
import Footer from "./mycomponent/Footer";
import AboutUs from "./mycomponent/AboutUs";
import Contact from "./mycomponent/ContactUs";
import RegistrationForm from "./mycomponent/Registration";
import LoginForm from "./mycomponent/Login";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<AboutUs/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<LoginForm/>}/>
            <Route path="sign up" element={<RegistrationForm/>}/>

            </Routes>
        <Footer/>
     
    </div>
  )
}

export default App;
