import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import AboutPage from "./pages/landing/AboutPage";
import ContactPage from "./pages/landing/ContactPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import ProfilePage from "./pages/ProfilePage";
import GardenerHome from "./components/GardenerHomePage";
import GardenerViewGarden from "./components/GardenerViewGarden";
import GardenerViewTask from "./components/GardenerViewTask";
import Gardnerchat from "./pages/chat/Gardnerchat";
import GardenerProfile from "./components/GardenerProfile";
import EventView from "./pages/Event/EventView";
import ViewResource from "./pages/Resources/ViewResource";
import GardnerForgetpasswordPage from "./pages/landing/GardnerForgetpasswordPage";
import ManagerLogin from "./pages/landing/ManagerLogin";
import ManagerSignup from "./pages/landing/ManagerSignup";
import ManagerForgetPassword from "./pages/landing/ManagerForgetPassword";
import CammunityLoginpage from "./pages/landing/CammunityLoginpage";
import CommunitySignupPage from "./pages/landing/CommunitySignupPage";
import CommunityForgotPassword from "./pages/landing/CommunityForgotPassword";
import AdminLogin from "./pages/landing/AdminLogin";
import ManagerHomePage from "./components/Manager/ManagerHomePage";
import ManagerProfilePage from "./components/Manager/ManagerProfilePage";
import ManagerEditProfile from "./components/Manager/ManagerEditProfile";
import ManagerViewTask from "./components/Manager/ManagerViewTask";
import ManagerAddTask from "./components/Manager/ManagerAddTask";
import ManagerEditTask from "./components/Manager/ManagerEditTask";
import CommunityHomePage from "./components/Community/CommunityHomePage";
import AdminHomePage from "./components/Admin/AdminHomePage";
import CommunityDashboard from "./components/Community/CommunityDashboard";
import CommunityProfileView from "./components/Community/CommunityProfileView";
import CommunityEditProfile from "./components/Community/CommunityEditProfile";
import ManagerViewGarden from "./components/Manager/ManagerViewGarden";
import ManagerAddGarden from "./components/Manager/ManagerAddGarden";
import ManagerEditGarden from "./components/Manager/ManagerEditGarden";
import AddEvent from "./pages/Event/AddEvent";
import ViewEvent from "./pages/Event/ViewEvent";
import ManagerChat from "./pages/chat/ManagerChat";
import CommunityResourseView from "./components/Community/CommunityResourseView";
import CommunityResourseAdd from "./components/Community/CommunityResourseAdd";
import CommunityEditResource from "./components/Community/CommunityEditResource";

function App() {
   const url = 'http://localhost:8080/upload'; 
  
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/gardener/home" element={<GardenerHome />} />
      <Route path="/gardener/viewgarden" element={<GardenerViewGarden url={url} />} />
      <Route path="/gardener/viewtask" element={<GardenerViewTask />} />
      <Route path="/gardener/chat" element={<Gardnerchat />} />
      <Route path="/gardener/profile" element={<GardenerProfile />} />
      <Route path="/gardener/viewevent" element={<EventView url={url} />} />
      <Route path="/gardener/viewresource" element={<ViewResource />} />
      <Route
        path="/gardener/forgetpassword"
        element={<GardnerForgetpasswordPage />}
      />
      <Route path="/manager/Login" element={<ManagerLogin />} />
      <Route path="/manager/Signup" element={<ManagerSignup />} />
      <Route
        path="/manager/Forgotpassword"
        element={<ManagerForgetPassword />}
      />
      <Route path="/manager/home" element={<ManagerHomePage />} />
      <Route path="/manager/profilepage" element={<ManagerProfilePage />} />
      <Route path="/manager/edit/profile" element={<ManagerEditProfile />} />
      <Route path="/manager/viewtask" element={<ManagerViewTask />} />
      <Route path="/manager/addtask" element={<ManagerAddTask />} />
      <Route path="/manager/edittask/:taskId" element={<ManagerEditTask />} />
      <Route path="/manager/view/garden" element={<ManagerViewGarden url={url}/>} />
      <Route path="/manager/add/garden" element={<ManagerAddGarden />} />
      <Route path="/manager/edit/garden" element={<ManagerEditGarden />} />
      <Route path="/manager/add/event" element={<AddEvent/>} />
      <Route path="/manager/view/event" element={<ViewEvent url={url}/>} />
      <Route path="/manager/Chat" element={<ManagerChat/>} />

      <Route path="/Cammunity/Login" element={<CammunityLoginpage />} />
      <Route path="/Community/Signup" element={<CommunitySignupPage />} />
      <Route
        path="/Community/Forgotpassword"
        element={<CommunityForgotPassword />}
      />
      <Route path="/community/dashboard" element={<CommunityDashboard />} />
      <Route path="/community/profileview" element={<CommunityProfileView/>} />
      <Route path="/community/editprofile" element={<CommunityEditProfile url={url} />} />
      <Route path="/admin/login" element={<AdminLogin />} />
      <Route path="/admin/dashboard" element={<AdminHomePage/>} />
      <Route path="/community/home" element={<CommunityHomePage />} />
            <Route path="/community/resourseview" element={<CommunityResourseView />} />
      <Route path="/community/resource/add" element={<CommunityResourseAdd />} />
      <Route path="/community/resource/edit" element={<CommunityEditResource />} />

    </Routes>

  );
}
export default App;
