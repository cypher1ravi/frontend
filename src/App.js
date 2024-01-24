
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './components/Main';
import LoginForm from './components/LoginForm';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/loginPage' element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
