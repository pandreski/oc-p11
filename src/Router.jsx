import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import Layout from './components/Layout';
import Accommodation from './pages/Accommodation';

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="a-propos" element={<About />} />
        <Route path="logement/:id" element={<Accommodation />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}
