import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Layout from './components/Layout';
import Accomodation from './pages/Accomodation';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="a-propos" element={<About />} />
        <Route path="logement/:id" element={<Accomodation />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}