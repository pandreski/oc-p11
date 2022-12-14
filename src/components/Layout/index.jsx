import { Outlet } from 'react-router-dom';
import Container from '../Container';
import Footer from '../Footer';
import Header from '../Header';

export default function Layout() {
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
