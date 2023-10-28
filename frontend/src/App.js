import "./App.css";
// import "./MapSearch.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import Dashboard from "./components/dashboard/Dashboard";
import Charts from "./components/Charts";
import Tables from "./components/Tables";
import Mapshow from "./components/Mapshow";
// import Mapshow from "./components/Mapsl";

import Buttons from "./components/buttons/Buttons";
import Cards from "./components/buttons/Cards";
import Color from "./components/utilities/Color";
import Border from "./components/utilities/Border";
import Animation from "./components/utilities/Animation";
import Other from "./components/utilities/Other";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import ForgotPassword from "./components/ForgotPassword";
import Error404 from "./components/Error404";
import BlankPage from "./components/BlankPage";
import LabelImg from './components/LabelImg';
import Singup from './components/Signup';

import Upload from "./components/Upload";
import User from "./components/CRUD/User";
import CreateUser from "./components/CRUD/CreateUser";
import UserUpdate from "./components/CRUD/UserUpdate";
import Question from "./components/CRUD/Question"
import QuestionUpdate from "./components/CRUD/QuestionUpdate"



function App() {
  return (
    <>
      <BrowserRouter basename="/chalothon/yangbot_frontend">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/labelImg" element={<LabelImg labelTypes={['Heathy', 'other_disease','other_disease_spot',"rubber_new_leaf_fall_disease","rubber_new_leaf_fall_disease_spot"]} />} />
          
          <Route path="/" element={<MainPage />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/charts" element={<Charts />} />
            <Route path="/tables" element={<Tables />} />
            <Route path="/mapshow" element={<Mapshow />} />
            <Route path="/components/buttons" element={<Buttons />} />
            <Route path="/components/cards" element={<Cards />} />
            <Route path="/utilities/color" element={<Color />} />
            <Route path="/utilities/border" element={<Border />} />
            <Route path="/utilities/animation" element={<Animation />} />
            <Route path="/utilities/other" element={<Other />} />
            <Route path="/404" element={<Error404 />} />
            <Route path="/blankpage" element={<BlankPage />} />
            <Route path="/signup" element={<Singup/>} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/user" element={<User />} />
            <Route path="/createuser" element={<CreateUser />} />
            <Route path="/userupdate/:id" element={<UserUpdate />} />
            <Route path="/questionupdate/:No" element={<QuestionUpdate/>} />
            <Route path="/question" element={<Question />} />
            
            
            
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
