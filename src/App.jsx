import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from '../src/pages/Login';
import Home from '../src/pages/Home';
import Orders from '../src/pages/Orders';
import Dashboard from '../src/pages/Dashboard';
import Support from '../src/pages/Support';
import NotFound from '../src/pages/NotFound';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pagina di Login */}
        <Route path="Login" element={<Login />}/>

        {/* pagina Home */}
        <Route path="/" element={<Home/>}/>

        {/* pagine ordini e dashboard */}
        <Route path="Orders" element={<Orders />}/>
        <Route path="Dashboard" element={<Dashboard />}/>

        {/* pagina supporto  */}
        <Route path="Support" element={<Support />}/>

        {/* Pagina NotFound */}
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}
