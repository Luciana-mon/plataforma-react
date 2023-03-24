import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home/Home';
import { Menu } from './components/Menu/Menu';
import { Blog } from './pages/Blog/Blog';
import { Contato } from './pages/Contato/Contato';
import { Usuarios } from './pages/Usuarios/Usuarios';
import { Login } from './pages/Login/Login';
import { NotFound } from './pages/NotFound/NotFound';




function App() {
    return (
        <div className="App">
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/blog' element={<Blog />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='/usuario' element={<Usuarios />}/>
                <Route path='/login' element={<Login />} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default App;
