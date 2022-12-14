import { Outlet, Route, Routes } from 'react-router-dom';
import Container from './Container';
import About from '../pages/About';
import Footer from './Footer';
import Header from './Header';
import Home from '../pages/Home';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="a-propos" element={<About />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <Container>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </Container>
  );
}
