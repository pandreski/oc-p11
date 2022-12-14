import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Error404 from '../pages/Error404';
import Home from '../pages/Home';
import Layout from './Layout';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="a-propos" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
