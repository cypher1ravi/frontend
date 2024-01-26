
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/ui/Main';
import LoginForm from './components/ui/LoginForm';
import Signup from './components/ui/SignUp';
import AdminMainPage from './components/admin/AdminMainPage';
import AdminHome from './components/admin/AdminHome';
import AddProject from './components/admin/AddProject';
import AddSkill from './components/admin/AddSkill';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/loginPage' element={<LoginForm />} />
        <Route path='/admin' element={<AdminMainPage />} >
          <Route index element={<AdminHome />} />
          <Route path='addproject' element={<AddProject />} />
          <Route path='addSkill' element={<AddSkill />} />
        </Route>
        <Route path='/signupPage' element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
