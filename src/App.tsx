import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import { useMyContext } from './context/myContext';
import Login from './pages/login';
import Register from './pages/register';
import List from './pages/list';
import Modal from './pages/modal';

function App() {
  const {modal} = useMyContext();

  return (
    <BrowserRouter>
      <div className="App">
        <h1>ToDoList</h1>
        <div className='main'>
          <Routes>
            <Route path="/" element={localStorage.getItem("token") === null ? <Login/> : <Navigate to="/list" replace/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/list" element={localStorage.getItem("token") !== null ? <List/> : <Navigate to="/" replace/>}/>
          </Routes>
        </div>
        {modal && <Modal show={modal}/>}
      </div>
    </BrowserRouter>
  );
}

export default App;
